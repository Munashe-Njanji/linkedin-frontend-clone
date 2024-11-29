import { Box, Typography, Chip, styled } from "@mui/material";
import { History, Bookmark } from "@mui/icons-material";
import SidebarSection from "./SidebarSection";

const TagChip = styled(Chip)(({ theme }) => ({
    margin: theme.spacing(0.5),
    backgroundColor: theme.palette.action.selected,
    '&:hover': {
        backgroundColor: theme.palette.action.focus,
    },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: theme.palette.text.secondary,
    fontWeight: 600,
}));

const RecentSection = () => {
    const recentTags = [
        "ReactJS",
        "TypeScript",
        "Web Development",
        "Software Architecture",
        "System Design",
    ];

    const savedTags = [
        "Career Development",
        "Tech Leadership",
        "Programming Best Practices",
    ];

    return (
        <SidebarSection
            title=""
            content={
                <Box>
                    <SectionTitle variant="body2">
                        <History fontSize="small" />
                        Recent
                    </SectionTitle>
                    <Box sx={{ display: "flex", flexWrap: "wrap", mb: 3 }}>
                        {recentTags.map((tag) => (
                            <TagChip
                                key={tag}
                                label={`#${tag}`}
                                size="small"
                                clickable
                            />
                        ))}
                    </Box>

                    <SectionTitle variant="body2">
                        <Bookmark fontSize="small" />
                        Saved Items
                    </SectionTitle>
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {savedTags.map((tag) => (
                            <TagChip
                                key={tag}
                                label={tag}
                                size="small"
                                clickable
                            />
                        ))}
                    </Box>
                </Box>
            }
        />
    );
};

export default RecentSection;