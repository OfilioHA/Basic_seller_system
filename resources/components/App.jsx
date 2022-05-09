import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./utils/Layout";
import { Home } from "./home";
import { ProductList } from "./products/list";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="products" element={<Layout />}>
                    <Route index element={<ProductList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

/*
<Route path="products" element={<Teams />}>
                        <Route path=":id" element={<Team />} />
                        <Route path="create" element={<NewTeamForm />} />
                        <Route index element={<LeagueStandings />} />
                    </Route>

*/
