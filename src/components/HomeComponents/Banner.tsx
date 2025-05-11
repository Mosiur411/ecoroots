'use client';

export function Banner() {

  return (
    <div className="mx-auto my-12 flex justify-center">


      <video
        autoPlay={true}
        loop
        muted
        playsInline
        className="rounded-lg w-full h-auto shadow-lg"
      >
        <source
          src="https://res.cloudinary.com/do2avxksp/video/upload/v1746989947/o1xtx3u39g5xl3vs9mlt.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>




    </div>
  );
}
