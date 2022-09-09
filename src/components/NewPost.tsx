import { Alert, Button, Label, Textarea, TextInput } from "flowbite-react";
import { useState, FC, FormEvent } from "react";

import { createNewPost } from "@/services";

interface INewPostProps {}

const NewPost: FC<INewPostProps> = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      await createNewPost({ id: 100, title, body });

      setTitle("");
      setBody("");
    } catch (error: any) {
      setError({ message: error.message });
    }

    setIsLoading(false);
  };

  return (
    <section className="max-w-sm mx-auto">
      <h2 className="text-center text-xl font-semibold">Create Post:</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Your title" />
          </div>
          <TextInput
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="name@flowbite.com"
            required={true}
            type="text"
            value={title}
          />
        </div>

        <div className="mb-2 block">
          <div className="mb-2 block">
            <Label htmlFor="contenct" value="Your contenct" />
          </div>

          <Textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            id="comment"
            placeholder="Leave a comment..."
            required={true}
            rows={4}
          />
        </div>

        <Button type="submit" disabled={isLoading || !title}>
          {isLoading ? (
            <>
              <span className="spinner-border spinner-border-sm"></span> Submitting...
            </>
          ) : (
            "Submit"
          )}
        </Button>

        {error && <Alert color="failure">Error fetching posts: {error.message}</Alert>}

        {/* <div className="alert alert-success alert-dismissible" role="alert">
          The post was saved successfuly
          <button type="button" className="btn-close"></button>
        </div> */}
      </form>
    </section>
  );
};

export default NewPost;
