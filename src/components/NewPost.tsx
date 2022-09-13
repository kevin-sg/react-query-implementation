import { Alert, Button, Label, Textarea, TextInput } from "flowbite-react";
import { useState, FC, FormEvent, ChangeEvent } from "react";

import { useMutatePosts } from "@/hooks";

const NewPost: FC = () => {
  const [formData, setFormData] = useState({ id: 10, title: "", body: "" });

  const { mutate, reset, error, status } = useMutatePosts();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(formData, {
      onSuccess: () => {
        setFormData({ id: 9, title: "", body: "" });
      },
    });
  };

  return (
    <section className="px-4">
      <h2 className="text-center text-xl font-semibold">Create Post:</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Your title" />
          </div>
          <TextInput
            id="title"
            name="title"
            onChange={handleChange}
            placeholder="name@flowbite.com"
            required={true}
            type="text"
            value={formData.title}
          />
        </div>

        <div className="mb-2 block">
          <div className="mb-2 block">
            <Label htmlFor="body" value="Your comment" />
          </div>

          <Textarea
            id="body"
            name="body"
            onChange={handleChange}
            placeholder="Leave a comment..."
            required={true}
            rows={4}
            value={formData.body}
          />
        </div>

        <Button type="submit" disabled={status === "loading" || !formData.title}>
          {status === "loading" ? (
            <>
              <span className="spinner-border spinner-border-sm"></span> Submitting...
            </>
          ) : (
            "Submit"
          )}
        </Button>

        <>
          {error && <Alert color="failure">Error fetching posts: {(error as any).message}</Alert>}

          {status === "success" && (
            <Alert color="success" onDismiss={reset}>
              Post created successfully!
            </Alert>
          )}
        </>
      </form>
    </section>
  );
};

export default NewPost;
