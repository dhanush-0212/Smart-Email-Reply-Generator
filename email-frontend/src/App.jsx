import { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Select from "@mui/material/Select";
import axios from "axios";
import "./App.css";

function App() {
  const [emailcontent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generatedreply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:8080/api/email/generate",
        {
          emailcontent,
          tone,
        }
      );
      setGeneratedReply(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      setError("Failed to generate eamil reply. Please try again");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <Container
      maxWidth="sm"
      sx={{
        py: 6,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "linear-gradient(135deg, #e0eafc, #cfdef3)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 700, textAlign: "center", mb: 5, color: "#1a237e", letterSpacing: 1 }}
      >
        Email Reply Generator
      </Typography>

      <Paper
        elevation={4}
        sx={{
          p: 4,
          mb: 5,
          borderRadius: 3,
          bgcolor: "white",
          boxShadow: "0 4px 12px rgba(26, 35, 126, 0.15)",
          transition: "box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: "0 6px 20px rgba(26, 35, 126, 0.25)",
          },
        }}
      >
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          label="Original Email Content"
          value={emailcontent || ""}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{
            mb: 4,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              transition: "border-color 0.3s ease",
              "&:hover fieldset": {
                borderColor: "#1a237e",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#3949ab",
                boxShadow: "0 0 8px rgba(57, 73, 171, 0.3)",
              },
            },
          }}
        />

        <FormControl fullWidth sx={{ mb: 4 }}>
          <InputLabel>Tone (Optional)</InputLabel>
          <Select
            value={tone || ""}
            label="Tone (Optional)"
            onChange={(e) => setTone(e.target.value)}
            sx={{
              "& .MuiSelect-select": {
                borderRadius: 3,
              },
            }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!emailcontent || loading}
          fullWidth
          sx={{
            py: 1.75,
            fontWeight: 600,
            fontSize: "1.1rem",
            textTransform: "none",
            boxShadow: "0 3px 6px rgba(26, 35, 126, 0.3)",
            transition: "box-shadow 0.3s ease, background-color 0.3s ease",
            "&:hover": {
              boxShadow: "0 6px 14px rgba(26, 35, 126, 0.5)",
              bgcolor: "#283593",
            },
          }}
        >
          {loading ? <CircularProgress size={26} /> : "Generate Reply"}
        </Button>
      </Paper>

      {error && (
        <Typography color="error" sx={{ mb: 2, textAlign: "center" }}>
          {error}
        </Typography>
      )}

      {generatedreply && (
        <Paper
          elevation={4}
          sx={{
            p: 3,
            borderRadius: 3,
            bgcolor: "white",
            boxShadow: "0 4px 12px rgba(26, 35, 126, 0.15)",
            mt: 4,
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: "#1a237e" }}>
            Generated Reply:
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            value={generatedreply || ""}
            inputProps={{ readOnly: true }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
              },
            }}
          />

          <Button
            variant="outlined"
            sx={{
              mt: 3,
              textTransform: "none",
              borderColor: "#1a237e",
              color: "#1a237e",
              fontWeight: 600,
              "&:hover": {
                borderColor: "#283593",
                color: "#283593",
                bgcolor: "transparent",
              },
            }}
            onClick={() => navigator.clipboard.writeText(generatedreply)}
          >
            Copy to Clipboard
          </Button>
        </Paper>
      )}
    </Container>
  );
}

export default App;
