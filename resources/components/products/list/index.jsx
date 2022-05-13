import { 
    DataGrid,
    GridActionsCellItem
} from "@mui/x-data-grid";
import { Grid, Typography, Divider } from "@mui/material";
import { Delete, Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useFetch } from "../../libs/useFetch";

export function ProductList() {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);

    const config = {
        columns: [
            {
                field: "code",
                headerName: "Código",
                width: 130
            },
            {
                field: "name",
                headerName: "Nombre",
                flex: 1,
                minWidth: 140
            },
            {
                field: "categoryName",
                headerName: "Modelo",
                width: 160,
                valueGetter: (params)=>{
                    return params.row.model.name
                }
            },
            {
                field: "brandName",
                headerName: "Marca",
                width: 160,
                valueGetter: (params)=>{
                    return params.row.model.brand.name
                }
            },
            {
                field: "amount",
                headerName: "Cantidad",
                width: 130,
                type: 'number',
            },
            {
                field: "price",
                headerName: "Precio",
                width: 130,
                type: 'number',
                valueGetter: (params)=>{
                    return `${params.row.price} C$`
                }
            },
            {
                field: "actions",
                type: "actions",
                headerName: "Acciones",
                width: 170,
                getActions: (params) => [
                    <GridActionsCellItem 
                        icon={<Delete
                            color="error"
                        />}
                        label="Borrar"
                    />,
                    <GridActionsCellItem 
                        icon={<Visibility
                            color="primary"
                        />}
                        label="Visualizar"
                    />
                ]
            }
        ],
        pageSize: 5,
        rowsPerPageOptions: [5, 10],
        checkboxSelection: true,
    };

    useEffect(() => {
        async function getData() {
            const { data } = await useFetch("products/list");
            setRows(data);
            setLoading(false);
        }
        getData();
    }, []);

    return (
        <Grid item xs={10}>
            <Typography
                variant="h4"
            >
                Productos
            </Typography>
            <Divider sx={{my: 2}} />
            <div style={{ height: 371, width: "100%" }}>
                <DataGrid 
                    rows={rows} 
                    loading={loading}
                    {...config}  
                />
            </div>
        </Grid>
    );
}
