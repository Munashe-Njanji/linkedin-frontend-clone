import { Box, Paper, Avatar, TextField, Grid, Button } from "@mui/material";
import {
    Image as ImageIcon,
    Videocam as VideocamIcon,
    Event as EventIcon,
    Article as ArticleIcon,
} from "@mui/icons-material";
import PropTypes from "prop-types";
const PostButton = ({ icon: Icon, label, color }) => (
    <Grid item xs={3}>
        <Button startIcon={<Icon />} size="small" sx={{ color }}>
            {label}
        </Button>
    </Grid>
);

PostButton.propTypes = {
    icon: PropTypes.elementType.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

const CreatePost = () => (
    <Paper sx={{ p: 2, borderRadius: 2, mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Avatar
                src="https://via.placeholder.com/150"
                sx={{ width: 40, height: 40, mr: 2 }}
            />
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Start a post"
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "30px",
                        backgroundColor: "#f5f5f5",
                    },
                }}
            />
        </Box>
        <Grid container spacing={2}>
            <PostButton icon={ImageIcon} label="Photo" color="#70b5f9" />
            <PostButton icon={VideocamIcon} label="Video" color="#7fc15e" />
            <PostButton icon={EventIcon} label="Event" color="#e7a33e" />
            <PostButton icon={ArticleIcon} label="Write Article" color="#fc9295" />
        </Grid>
    </Paper>
);

export default CreatePost;
