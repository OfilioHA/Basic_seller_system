import {
    Table,
    TableBody,
    TableHead,
    TableContainer,
    TableCell,
    TableRow,
    Divider,
    Typography,
    IconButton,
    Stack,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import { useFetch } from "../libs/useFetch";

export default function dataTable(props) {
    const { title, headers, visible, route } = props;

    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let fetchData = async () =>{
            const routeData = route + "/list";
            const { data } = await useFetch(routeData);
            setRows(data);
        }
        fetchData();
    }, []);

    return (
        <>
            <Typography variant="h4">{title}</Typography>
            <Divider />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {headers.map((item, key) => (
                                <TableCell key={key}>{item}</TableCell>
                            ))}
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((item, keyItem) => (
                            <TableRow key={keyItem}>
                                {visible.map((prop, key) => (
                                    <TableCell key={key}>
                                        {item[prop]}
                                    </TableCell>
                                ))}
                                <TableCell>
                                    <Stack direction="row" spacing={2}>
                                        <IconButton component="span">
                                            <DeleteIcon />
                                        </IconButton>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
