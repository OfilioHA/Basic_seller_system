import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
    return (
        <>
            <Header />
            <main>
                <Grid 
                    container 
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Outlet />
                </Grid>
            </main>
            <Footer />
        </>
    );
}
