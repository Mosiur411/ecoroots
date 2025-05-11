'use server';

import { getValidToken } from '@/lib/getValidToken';
import { revalidateTag } from 'next/cache';
import { FieldValues } from 'react-hook-form';

// getAllIdeas
export const getAllIdeas = async (
  page?: string,
  limit?: string,
  query?: { [key: string]: string | string[] | undefined }
): Promise<any> => {
  const params = new URLSearchParams();

  if (query?.price) {
    params.append('minPrice', '0');
    params.append('maxPrice', query?.price.toString());
  }

  if (query?.searchTerm) {
    params.append('searchTerm', query?.searchTerm.toString());
  }

  if (query?.isPaid) {
    params.append('isPaid', query?.isPaid.toString());
  }
  if (query?.categoryId) {
    params.append('categoryId', query?.categoryId.toString());
  }
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/ideas?limit=${limit}&page=${page}&${params}`,
      {
        next: {
          tags: ['IDEAS'],
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const getByVotes = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/votes/ideas/by-votes`,
      {
        method: 'GET',
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message);
  }
};

// getSingleIdeaDetails
export const getSingleIdeaDetails = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/ideas/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        tags: ['IDEAS'],
      },
    });

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// createVote
export const createVote = async (paymentData: FieldValues): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/votes`, {
      method: 'POST',
      body: JSON.stringify(paymentData),
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });

    revalidateTag('IDEAS');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// deleteVote
export const deleteVote = async (id: string) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/votes/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ideaId: id }),
    });

    revalidateTag('IDEAS');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message);
  }
};

// createComment
export const createComment = async (payload: any): Promise<any> => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/comments`, {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    revalidateTag('IDEAS');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// deleteComment
export const deleteComment = async (id: string) => {
  const token = await getValidToken();
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/comments/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: token,
          // 'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ ideaId: id }),
      }
    );

    revalidateTag('IDEAS');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message);
  }
};
