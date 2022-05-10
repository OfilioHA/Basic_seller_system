import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useFetch } from "../../libs/useFetch";

export function ProductList() {
    const [rows, setRows] = useState([]);

    const config = {
        columns: [
            {
                field: "name",
                headerName: "Nombre",
                width: 160
            },
            {
                field: "code",
                headerName: "Código",
                width: 160
            },
            {
                field: "amount",
                headerName: "Cantidad",
                type: 'number',
                width: 160
            },
        ],
        pageSize: 5,
        rowsPerPageOptions: [5, 10],
        checkboxSelection: true,
    };

    useEffect(() => {
        async function getData() {
            const { data } = await useFetch("products/list");
            setRows(data);
        }
        getData();
    }, []);

    return (
        <>
            <h1>Productos</h1>
            <div style={{ height: 370, width: "100%" }}>
                <DataGrid rows={rows} {...config} />
            </div>
        </>
    );
}
