import {
    Card,
    CardHeader,
    CardContent,
    Avatar,
    Typography,
    IconButton,
} from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import PropTypes from "prop-types";
import PostActions from "./PostActions";

const FeedCard = ({ name, avatar = "", jobTitle = "", time, content, image = null }) => (
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
                    <MoreHoriz />
                </IconButton>
            }
        />
        <CardContent>
            <Typography variant="body1" sx={{ mb: 2 }}>
                {content}
            </Typography>
            {image && (
                <img
                    src={image}
                    alt="Post content"
                    style={{ width: "100%", borderRadius: "8px" }}
                />
            )}
        </CardContent>
        <PostActions />
    </Card>
);

FeedCard.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    jobTitle: PropTypes.string,
    time: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string,
};

export default FeedCard;
