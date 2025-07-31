import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTask, createTask, updateTask } from "../api/tasksApi";
import { TextField, Checkbox, FormControlLabel, Button, Stack, Card, CardContent, Typography } from "@mui/material";

const TaskEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === "new";

  const [name, setName] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!isNew) {
      getTask(id).then(({ data }) => {
        setName(data.name);
        setCompleted(data.completed);
      });
    }
  }, [id, isNew]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isNew) {
      await createTask({ name, completed });
    } else {
      await updateTask(id, { name, completed });
    }
    navigate("/");
  };

  return (
    <Stack alignItems="center" justifyContent="center" sx={{ mt: 5 }}>
      <Card sx={{ width: "80%", maxWidth: 600, p: 3 }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {isNew ? "Nueva Tarea" : "Editar Tarea"}
          </Typography>
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
        </CardContent>
      </Card>
    </Stack>
  );
};

export default TaskEdit;
