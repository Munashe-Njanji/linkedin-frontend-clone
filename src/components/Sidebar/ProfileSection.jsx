import { Box, Avatar, Typography, Button, styled } from "@mui/material";
import { Visibility, TrendingUp, People } from "@mui/icons-material";
import SidebarSection from "./SidebarSection";

const StatsContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: `${theme.spacing(2)} 0`,
}));

const StatItem = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    cursor: "pointer",
    padding: theme.spacing(0.5),
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
        backgroundColor: theme.palette.action.hover,
    },
}));

const ProfileBanner = styled(Box)(({ theme }) => ({
    position: "relative",
    height: 60,
    backgroundColor: theme.palette.primary.light,
    borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
    width: 72,
    height: 72,
    border: `3px solid ${theme.palette.background.paper}`,
    position: "relative",
    top: -30,
    left: theme.spacing(2),
}));

const ProfileSection = () => (
    <SidebarSection
        title=""
        sx={{ p: 0, overflow: "hidden" }}
        content={
            <Box>
                <ProfileBanner />
                <Box sx={{ px: 2, pb: 2 }}>
                    <ProfileAvatar src="https://via.placeholder.com/150" />
                    <Box sx={{ mt: -2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            Munashe Njanji
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                            Senior Software Developer | React | Node.js | AWS
                        </Typography>
                    </Box>

                    <StatsContainer>
                        <StatItem>
                            <Visibility sx={{ color: "text.secondary", mr: 1, fontSize: 20 }} />
                            <Box>
                                <Typography variant="body2" color="textSecondary">
                                    Profile views
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                    1,642
                                </Typography>
                            </Box>
                        </StatItem>
                        <StatItem>
                            <TrendingUp sx={{ color: "text.secondary", mr: 1, fontSize: 20 }} />
                            <Box>
                                <Typography variant="body2" color="textSecondary">
                                    Post impressions
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                    8,227
                                </Typography>
                            </Box>
                        </StatItem>
                        <StatItem>
                            <People sx={{ color: "text.secondary", mr: 1, fontSize: 20 }} />
                            <Box>
                                <Typography variant="body2" color="textSecondary">
                                    Network connections
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                    892
                                </Typography>
                            </Box>
                        </StatItem>
                    </StatsContainer>

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            borderRadius: 20,
                            textTransform: "none",
                            mb: 1,
                        }}
                    >
                        View Profile
                    </Button>
                </Box>
            </Box>
        }
    />
);

export default ProfileSection;