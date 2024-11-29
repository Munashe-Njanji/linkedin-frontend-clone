import {
    Box,
    Container,
    CssBaseline,
    Grid,
    Paper,
    Avatar,
    Typography,
    IconButton,
    Button,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Divider,
    TextField,
} from "@mui/material";
import {
    Image as ImageIcon,
    Videocam as VideocamIcon,
    Event as EventIcon,
    Article as ArticleIcon,
    MoreHoriz as MoreHorizIcon,
    ThumbUp as ThumbUpIcon,
    ChatBubbleOutline as ChatBubbleOutlineIcon,
    Share as ShareIcon,
    Send as SendIcon,
} from "@mui/icons-material";
import PropTypes from "prop-types";

import LinkedInHeader from "./LinkedInHeader"; // Use the header we designed earlier.

// Styled Components
const SidebarSection = ({ title, content }) => (
    <Paper sx={{ p: 2, mb: 2, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: 600, mb: 1 }}>
            {title}
        </Typography>
        {content}
    </Paper>
);

SidebarSection.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
}

const FeedCard = ({ name, avatar = '', jobTitle = '', time, content, image = null }) => (
    <Card sx={{ mb: 3, borderRadius: 2 }}>
        <CardHeader
            avatar={<Avatar src={avatar} />}
            title={
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {name}
                </Typography>
            }
            subheader={
                <Typography variant="body2" color="textSecondary">
                    {jobTitle} • {time}
                </Typography>
            }
            action={
                <IconButton>
                    <MoreHorizIcon />
                </IconButton>
            }
        />
        <CardContent>
            <Typography variant="body1" sx={{ mb: 2 }}>
                {content}
            </Typography>
            {image && <img src={image} alt="Post content" style={{ width: "100%", borderRadius: "8px" }} />}
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "space-around" }}>
            <Button startIcon={<ThumbUpIcon />} size="small" sx={{ color: "text.secondary" }}>
                Like
            </Button>
            <Button startIcon={<ChatBubbleOutlineIcon />} size="small" sx={{ color: "text.secondary" }}>
                Comment
            </Button>
            <Button startIcon={<ShareIcon />} size="small" sx={{ color: "text.secondary" }}>
                Share
            </Button>
            <Button startIcon={<SendIcon />} size="small" sx={{ color: "text.secondary" }}>
                Send
            </Button>
        </CardActions>
    </Card>
);

FeedCard.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    jobTitle: PropTypes.string,
    time: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string
};


const LinkedInHomepage = () => {
    return (
        <>
            <CssBaseline />
            <LinkedInHeader /> {/* Import and use the header */}
            <Box sx={{ pt: 10, pb: 5 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        {/* Sidebar */}
                        <Grid item xs={12} md={3}>
                            <SidebarSection
                                title="Welcome, Munashe"
                                content={
                                    <>
                                        <Box sx={{ textAlign: "center", mb: 2 }}>
                                            <Avatar
                                                src="https://via.placeholder.com/150"
                                                sx={{ width: 80, height: 80, mx: "auto", mb: 1 }}
                                            />
                                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                                Munashe Njanji
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Software Developer
                                            </Typography>
                                        </Box>
                                        <Button fullWidth variant="outlined" sx={{ borderRadius: 20 }}>
                                            View Profile
                                        </Button>
                                    </>
                                }
                            />
                            <SidebarSection
                                title="Recent"
                                content={
                                    <>
                                        <Typography variant="body2" sx={{ mb: 1 }}>
                                            #ReactJS
                                        </Typography>
                                        <Typography variant="body2" sx={{ mb: 1 }}>
                                            #SoftwareEngineering
                                        </Typography>
                                        <Typography variant="body2">#CareerDevelopment</Typography>
                                    </>
                                }
                            />
                        </Grid>

                        {/* Feed */}
                        <Grid item xs={12} md={6}>
                            {/* Post Box */}
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
                                    <Grid item xs={3}>
                                        <Button startIcon={<ImageIcon />} size="small" sx={{ color: "#70b5f9" }}>
                                            Photo
                                        </Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button startIcon={<VideocamIcon />} size="small" sx={{ color: "#7fc15e" }}>
                                            Video
                                        </Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button startIcon={<EventIcon />} size="small" sx={{ color: "#e7a33e" }}>
                                            Event
                                        </Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button startIcon={<ArticleIcon />} size="small" sx={{ color: "#fc9295" }}>
                                            Write Article
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>

                            {/* Feed Cards */}
                            <FeedCard
                                name="John Doe"
                                avatar="https://via.placeholder.com/150"
                                jobTitle="Data Scientist"
                                time="2h ago"
                                content="Excited to share my latest project on AI-powered data analytics!"
                                image="https://via.placeholder.com/600x300"
                            />
                            <FeedCard
                                name="Jane Smith"
                                avatar="https://via.placeholder.com/150"
                                jobTitle="Web Developer"
                                time="4h ago"
                                content="Had a great experience presenting at the Tech World 2024 conference!"
                            />
                        </Grid>

                        {/* Right Widgets Section */}
                        <Grid item xs={12} md={3}>
                            <SidebarSection
                                title="LinkedIn News"
                                content={
                                    <>
                                        <Typography variant="body2" sx={{ mb: 1 }}>
                                            🚀 Tech Industry Hiring Surge
                                        </Typography>
                                        <Typography variant="body2" sx={{ mb: 1 }}>
                                            📈 AI and ML Transformations
                                        </Typography>
                                        <Typography variant="body2">🌍 Sustainable Technology Trends</Typography>
                                    </>
                                }
                            />
                            <SidebarSection
                                title="People You May Know"
                                content={
                                    <>
                                        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                            <Avatar src="https://via.placeholder.com/150" sx={{ width: 40, height: 40, mr: 2 }} />
                                            <Box>
                                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                                    Alice Johnson
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    Marketing Manager
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Button variant="contained" size="small" sx={{ width: "100%" }}>
                                            Connect
                                        </Button>
                                    </>
                                }
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default LinkedInHomepage;
