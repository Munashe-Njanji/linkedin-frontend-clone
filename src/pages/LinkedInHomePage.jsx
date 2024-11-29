import { Grid } from "@mui/material";
import LinkedInLayout from "../components/Layout/LinkedInLayout";
import ProfileSection from "../components/Sidebar/ProfileSection";
import RecentSection from "../components/Sidebar/RecentSection";
import CreatePost from "../components/Feed/CreatePost";
import FeedCard from "../components/Feed/FeedCard";
import NewsSection from "../components/Sidebar/NewsSection";
import ConnectionsSection from "../components/Sidebar/ConnectionsSection";

const LinkedInHomepage = () => (
  <LinkedInLayout>
    {/* Left Sidebar */}
    <Grid item xs={12} md={3}>
      <ProfileSection />
      <RecentSection />
    </Grid>

    {/* Feed */}
    <Grid item xs={12} md={6}>
      <CreatePost />
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

    {/* Right Sidebar */}
    <Grid item xs={12} md={3}>
      <NewsSection />
      <ConnectionsSection />
    </Grid>
  </LinkedInLayout>
);

export default LinkedInHomepage;
