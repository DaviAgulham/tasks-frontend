import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../api/tasksApi";
import {
  Table, TableBody, TableCell, TableHead, TableRow,
  IconButton, CircularProgress, Typography, Button, Stack,
  TextField, MenuItem, Select, FormControl, InputLabel,
  Card, CardContent, InputAdornment
} from "@mui/material";
import { Delete, Edit, Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [filterCompleted, setFilterCompleted] = useState("");

  const navigate = useNavigate();

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const params = {};
      if (search) params.search = search;
      if (filterCompleted) params.completed = filterCompleted;
      const { data } = await getTasks(params);
      setTasks(data);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleSearch = () => {
    setSearch(searchInput); // aplica la búsqueda solo cuando el usuario hace clic o da Enter
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // evita enviar un formulario accidentalmente
      handleSearch();
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [search, filterCompleted]);

  if (loading) return <CircularProgress />;

  return (
    <Card sx={{ width: "80%", maxWidth: 900 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
          <Typography variant="h4">Tareas</Typography>
          <Button variant="contained" onClick={() => navigate("/tasks/new")}>
            Nueva Tarea
          </Button>
        </Stack>

        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <TextField
            label="Buscar por nombre"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyPress}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <Search />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <FormControl sx={{ minWidth: 180 }}>
            <InputLabel id="filter-completed-label">Estado</InputLabel>
            <Select
              labelId="filter-completed-label"
              value={filterCompleted}
              onChange={(e) => setFilterCompleted(e.target.value)}
            >
              <MenuItem value="">Todas</MenuItem>
              <MenuItem value="true">Completadas</MenuItem>
              <MenuItem value="false">Pendientes</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Completada</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.completed ? "Sí" : "No"}</TableCell>
                <TableCell>
                  <IconButton onClick={() => navigate(`/tasks/${task.id}`)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(task.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TaskList;
