import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const EditTask = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("Sample Task " + id);
  const [description, setDescription] = useState("This is a sample task description for task " + id);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Edit task logic here
    navigate("/");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Task</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium">Title</label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium">Description</label>
            <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <Button type="submit">Save</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EditTask;