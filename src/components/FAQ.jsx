import { Accordion } from 'flowbite-react';
import React from 'react';

function FAQ() {
  return (
    <div id="faq" className="max-w-3xl mx-auto pb-14">
      <h3 className="text-xl  text-center pb-8 text-primary">
        Frequently Asked Questions
      </h3>
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>How does the 14 day fre trial work?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit consequatur expedita exercitationem laborum
              laudantium tenetur sapiente nam id, et sed commodi voluptate nisi
              ex. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus, magni! Ipsa earum sequi laborum?
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Can I change plans anytime?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis voluptates debitis dolores, nihil et culpa nesciunt,
              accusantium quae hic explicabo alias doloremque obcaecati modi
              neque porro officia ad? Mollitia voluptas ad corporis numquam
              labore veritatis cupiditate perferendis cumque id. Minima.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is your refund policy?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
              labore. Ut voluptatibus dolorem in debitis non quis et, quod
              assumenda ipsa magni nobis modi odit facilis ratione! Fugiat fuga
              officiis ea impedit quam, molestiae neque odio esse numquam
              ducimus, quae laudantium atque itaque autem ad!
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}

export default FAQ;
