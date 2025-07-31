import { useState, useEffect } from "react";
import { TextField, Checkbox, FormControlLabel, Button, Stack } from "@mui/material";

const TaskForm = ({ initialData, onSubmit }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [completed, setCompleted] = useState(initialData?.completed || false);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setCompleted(initialData.completed);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, completed });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Nombre de la tarea"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
          }
          label="Completada"
        />
        <Button variant="contained" type="submit">
          Guardar
        </Button>
      </Stack>
    </form>
  );
};

export default TaskForm;
