import { Box, Container, CssBaseline, Grid } from "@mui/material";
import PropTypes from "prop-types";
import LinkedInHeader from "../LinkedInHeader";

const LinkedInLayout = ({ children }) => (
    <>
        <CssBaseline />
        <LinkedInHeader />
        <Box sx={{ pt: 10, pb: 5, minHeight: '100vh', backgroundColor: '#f3f2ef' }}>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    {children}
                </Grid>
            </Container>
        </Box>
    </>
);

LinkedInLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LinkedInLayout;
