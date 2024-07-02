import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const Index = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Sample Task 1", description: "This is a sample task" },
    { id: 2, title: "Sample Task 2", description: "This is another sample task" },
  ]);

  const navigate = useNavigate();

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Todo List</h1>
        <Button onClick={() => navigate("/add-task")}>Add Task</Button>
      </div>
      <div className="grid gap-4">
        {tasks.map(task => (
          <Card key={task.id}>
            <CardHeader>
              <CardTitle>{task.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{task.description}</p>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button onClick={() => navigate(`/edit-task/${task.id}`)} variant="outline">Edit</Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Delete</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete the task.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => deleteTask(task.id)}>Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;