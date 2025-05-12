import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqPage = () => {
  return (
    <div className="md:mx-20">
      <h1 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h1>

      <Accordion type="single" collapsible className="w-full">
        {/* What is EcoRoots ? */}
        <AccordionItem value="item-1">
          <AccordionTrigger>What is EcoRoots ?</AccordionTrigger>
          <AccordionContent>
            EcoRoots  is an online community platform where members share and
            discover innovative sustainability ideas to help protect our
            environment. From small daily habits to large-scale projects, we
            connect eco-conscious individuals to accelerate green solutions.
          </AccordionContent>
        </AccordionItem>

        {/* How does EcoRoots  work? */}
        <AccordionItem value="item-2">
          <AccordionTrigger>How does EcoRoots  work?</AccordionTrigger>
          <AccordionContent>
            Members can submit their sustainability ideas which go through a
            review process by our admin team. Approved ideas become visible to
            the community where others can vote, comment, and implement them. We
            categorize ideas by impact areas like Energy, Waste, and
            Transportation.
          </AccordionContent>
        </AccordionItem>

        {/* New Section: How do I get involved with EcoRoots? */}
        <AccordionItem value="item-3">
          <AccordionTrigger>How do I get involved with EcoRoots?</AccordionTrigger>
          <AccordionContent>
            Getting involved is easy! Simply sign up for an account, explore ideas, and start submitting your own. Whether youre a creator, voter, or commenter, you can actively participate in making a positive environmental impact.
          </AccordionContent>
        </AccordionItem>

        {/* New Section: How do I collaborate with others on ideas? */}
        <AccordionItem value="item-4">
          <AccordionTrigger>How do I collaborate with others on ideas?</AccordionTrigger>
          <AccordionContent>
            EcoRoots encourages collaboration. You can comment on ideas, suggest improvements, or find team members in the discussions. We also have a Seeking Collaborators tag to help you connect with like-minded individuals for larger projects.
          </AccordionContent>
        </AccordionItem>

        {/* New Section: What are EcoRoots' sustainability goals? */}
        <AccordionItem value="item-5">
          <AccordionTrigger>What are EcoRoots sustainability goals?</AccordionTrigger>
          <AccordionContent>
            EcoRoots aims to create a global network of individuals and organizations committed to sustainability. We focus on reducing waste, promoting renewable energy, supporting sustainable transportation, and driving eco-friendly innovations in all aspects of life.
          </AccordionContent>
        </AccordionItem>

        {/* How are ideas moderated? */}
        <AccordionItem value="item-6">
          <AccordionTrigger>How are ideas moderated?</AccordionTrigger>
          <AccordionContent>
            Our admin team reviews all submissions for feasibility, originality,
            and environmental impact. Ideas may be approved, rejected with
            feedback, or suggested for improvements. We maintain high standards
            to ensure quality content.
          </AccordionContent>
        </AccordionItem>

        {/* How does the voting system work? */}
        <AccordionItem value="item-7">
          <AccordionTrigger>How does the voting system work?</AccordionTrigger>
          <AccordionContent>
            Members can upvote or downvote ideas (one vote per member per idea)
            to indicate which solutions they find most valuable. Top-voted ideas
            get featured on our homepage and may be selected for special
            recognition by our team.
          </AccordionContent>
        </AccordionItem>

        {/* New Section: How do I track the progress of an idea? */}
        <AccordionItem value="item-8">
          <AccordionTrigger>How do I track the progress of an idea?</AccordionTrigger>
          <AccordionContent>
            Once an idea is submitted, members can check for updates in the discussion thread. You can track its approval, implementation stages, and collaborate with others who are bringing the idea to life.
          </AccordionContent>
        </AccordionItem>

        {/* New Section: Can I participate in events or initiatives? */}
        <AccordionItem value="item-9">
          <AccordionTrigger>Can I participate in events or initiatives?</AccordionTrigger>
          <AccordionContent>
            Yes! We often organize events, webinars, and challenges where members can actively participate and showcase their ideas. Check our events page for upcoming opportunities to get involved.
          </AccordionContent>
        </AccordionItem>

        {/* What if my idea gets rejected? */}
        <AccordionItem value="item-10">
          <AccordionTrigger>What if my idea gets rejected?</AccordionTrigger>
          <AccordionContent>
            Don&apos;t worry! Our admins provide specific feedback on why an
            idea was rejected and suggestions for improvement. You can revise
            and resubmit your idea up to two more times. Common reasons include
            needing more detail or feasibility analysis.
          </AccordionContent>
        </AccordionItem>

        {/* How can I track an idea's implementation? */}
        <AccordionItem value="item-11">
          <AccordionTrigger>
            How can I track an idea&apos;s implementation?
          </AccordionTrigger>
          <AccordionContent>
            Many ideas include follow-up posts showing real-world
            implementation. You can also use the discussion threads to ask for
            updates or share your own experiences trying the idea. Our
            &quot;Success Stories&quot; section highlights particularly
            impactful implementations.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqPage;
