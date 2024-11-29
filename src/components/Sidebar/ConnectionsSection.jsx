import { Box, Avatar, Typography, Button, styled } from "@mui/material";
import SidebarSection from "./SidebarSection";

const ConnectionCard = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "start",
    padding: theme.spacing(1.5),
    marginBottom: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    "&:hover": {
        backgroundColor: theme.palette.action.hover,
    },
}));

const CompanyLogo = styled(Avatar)(({ theme }) => ({
    width: 48,
    height: 48,
    marginRight: theme.spacing(2),
}));

const ConnectionsSection = () => {
    const connections = [
        {
            name: "Alice Johnson",
            role: "Senior Product Manager at Google",
            avatar: "https://via.placeholder.com/150",
            mutualConnections: 15,
        },
        {
            name: "David Chen",
            role: "Software Architect at Microsoft",
            avatar: "https://via.placeholder.com/150",
            mutualConnections: 23,
        },
        {
            name: "Sarah Williams",
            role: "Tech Lead at Amazon",
            avatar: "https://via.placeholder.com/150",
            mutualConnections: 8,
        },
    ];

    return (
        <SidebarSection
            title="People You May Know"
            content={
                <Box>
                    {connections.map((connection, index) => (
                        <ConnectionCard key={index}>
                            <CompanyLogo src={connection.avatar} />
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                                    {connection.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                                    {connection.role}
                                </Typography>
                                <Typography variant="caption" color="textSecondary" sx={{ mb: 1, display: "block" }}>
                                    {connection.mutualConnections} mutual connections
                                </Typography>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        borderRadius: 20,
                                        textTransform: "none",
                                        minWidth: 100,
                                    }}
                                >
                                    Connect
                                </Button>
                            </Box>
                        </ConnectionCard>
                    ))}
                    <Button
                        fullWidth
                        sx={{
                            textTransform: "none",
                            color: "primary.main",
                            "&:hover": {
                                backgroundColor: "action.hover",
                            },
                        }}
                    >
                        Show more
                    </Button>
                </Box>
            }
        />
    );
};

export default ConnectionsSection;