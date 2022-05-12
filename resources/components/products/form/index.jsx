import {
    TextField,
    Grid,
    InputAdornment,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from "@mui/material";
import { useState, UseEffect } from "react";

export function ProductForm() {
    const [categoriesList, setCategoriesList] = useState([]);
    const [brandsList, setBrandsList] = useState([]);
    const [modelList, setModelList] = useState([]);
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    return (
        <Grid item md={6} xs={9}>
            <Grid container spacing={2}>
                <Grid item md={12} xs={12}>
                    <TextField
                        label="Nombre"
                        id="product_name"
                        name="name"
                        variant="standard"
                        value={inputs.name || ""}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        label="Codigo"
                        id="product_code"
                        name="code"
                        variant="standard"
                        fullWidth
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <FormControl fullWidth variant="standard">
                        <InputLabel id="product_category_label">
                            Categoria
                        </InputLabel>
                        <Select
                            labelId="product_category_label"
                            id="product_category"
                            label="Categoria"
                            value={inputs.category || ""}
                        >
                            <MenuItem disabled value={""}></MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item md={6} xs={12}>
                    <FormControl fullWidth variant="standard">
                        <InputLabel id="product_brand_label">Marca</InputLabel>
                        <Select
                            labelId="product_brand_label"
                            id="product_brand"
                            label="Marca"
                            value={10}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item md={6} xs={12}>
                    <FormControl fullWidth variant="standard">
                        <InputLabel id="product_model_label">Modelo</InputLabel>
                        <Select
                            labelId="product_model_label"
                            id="product_model"
                            label="Modelo"
                            value={10}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        label="Cantidad"
                        id="product_amount"
                        variant="standard"
                        type="number"
                        fullWidth
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        label="Precio"
                        id="product_price"
                        variant="standard"
                        type="number"
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    C$
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}
