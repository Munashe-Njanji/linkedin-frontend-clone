import { Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";

const SidebarSection = ({ title, content, sx = {} }) => (
    <Paper sx={{ p: 2, mb: 2, borderRadius: 2, ...sx }}>
        <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: 600, mb: 1 }}>
            {title}
        </Typography>
        {content}
    </Paper>
);

SidebarSection.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    sx: PropTypes.object,
};

export default SidebarSection;