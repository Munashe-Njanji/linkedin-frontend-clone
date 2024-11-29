import { Button, CardActions, Divider } from "@mui/material";
import {
  ThumbUp,
  ChatBubbleOutline,
  Share,
  Send,
} from "@mui/icons-material";

const PostActions = () => (
  <>
    <Divider />
    <CardActions sx={{ justifyContent: "space-around" }}>
      <Button startIcon={<ThumbUp />} size="small" sx={{ color: "text.secondary" }}>
        Like
      </Button>
      <Button startIcon={<ChatBubbleOutline />} size="small" sx={{ color: "text.secondary" }}>
        Comment
      </Button>
      <Button startIcon={<Share />} size="small" sx={{ color: "text.secondary" }}>
        Share
      </Button>
      <Button startIcon={<Send />} size="small" sx={{ color: "text.secondary" }}>
        Send
      </Button>
    </CardActions>
  </>
);

export default PostActions;