import { Box, Typography, styled } from "@mui/material";
import { TrendingUp, FiberManualRecord } from "@mui/icons-material";
import SidebarSection from "./SidebarSection";

const NewsItem = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "start",
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    cursor: "pointer",
    "&:hover": {
        backgroundColor: theme.palette.action.hover,
    },
}));

const Bullet = styled(FiberManualRecord)({
    fontSize: 8,
    marginTop: 6,
    marginRight: 8,
});

const NewsSection = () => {
    const newsItems = [
        {
            title: "Tech Industry Sees Record Growth",
            readers: "86,423 readers",
            time: "2h ago",
        },
        {
            title: "AI Breakthrough in Healthcare",
            readers: "54,265 readers",
            time: "4h ago",
        },
        {
            title: "Remote Work Trends 2024",
            readers: "32,891 readers",
            time: "6h ago",
        },
        {
            title: "New Programming Languages on the Rise",
            readers: "21,567 readers",
            time: "8h ago",
        },
    ];

    return (
        <SidebarSection
            title="LinkedIn News"
            content={
                <Box>
                    {newsItems.map((item, index) => (
                        <NewsItem key={index}>
                            <Bullet color="primary" />
                            <Box>
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="caption" color="textSecondary">
                                    {item.readers} • {item.time}
                                </Typography>
                            </Box>
                        </NewsItem>
                    ))}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 2,
                            color: "primary.main",
                            cursor: "pointer",
                        }}
                    >
                        <TrendingUp sx={{ mr: 1, fontSize: 20 }} />
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            Show more trends
                        </Typography>
                    </Box>
                </Box>
            }
        />
    );
};

export default NewsSection;