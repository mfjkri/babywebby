import { Button } from "@mui/material";

import { Link } from "components/Elements";
import { ContentLayout } from "components/Layout";

export const Overview = () => {
  return (
    <ContentLayout title="">
      <h1 className="font-extrabold text-4xl mb-4">
        Welcome <u>{}</u>!
      </h1>
      <div className="bg-secondary dark:bg-primary text-primary dark:text-secondary rounded-3xl w-full p-4 mb-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          reiciendis!
        </p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <br />
        <p className="font-extrabold underline">Lorem.</p>
        <ul className="pl-8 list-disc">
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <br />
        <p className="text-sm underline">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, maxime.
        </p>
      </div>
      <div className="ml-3 inline-flex">
        <Link to="/">
          <Button>Proceed</Button>
        </Link>
      </div>
    </ContentLayout>
  );
};
