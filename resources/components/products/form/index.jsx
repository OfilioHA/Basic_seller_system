import {
    TextField,
    Grid,
    InputAdornment,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import { useFetch } from "../../libs/useFetch";

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

    useEffect(() => {
        async function getData() {
            const categories = await useFetch("catalogs/categories");
            const brands = await useFetch("catalogs/brands");

            setCategoriesList(categories.data);
            setBrandsList(brands.data);
        }
        getData();
    }, []);

    useEffect(() => {
        async function getData() {
            if (inputs.brand === undefined) return;
            const { id } = inputs.brand;
            const { data } = await useFetch(`catalogs/models/${id}`);
            setModelList(data);
        }
        getData();
    }, [inputs.brand]);

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
                    <div style={{ display: "flex" }}>
                        <FormControl fullWidth variant="standard">
                            <InputLabel id="product_category_label">
                                Categoria
                            </InputLabel>
                            <Select
                                labelId="product_category_label"
                                id="product_category"
                                name="category"
                                label="Categoria"
                                value={inputs.category || ""}
                                onChange={handleChange}
                            >
                                {categoriesList.map((element, index) => {
                                    return (
                                        <MenuItem value={element} key={index}>
                                            {element.name}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                        <IconButton
                            color="primary"
                            variant="outlined"
                            sx={{ ml: 2 }}
                        >
                            <AddIcon />
                        </IconButton>
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <div style={{ display: "flex" }}>
                        <FormControl fullWidth variant="standard">
                            <InputLabel id="product_brand_label">
                                Marca
                            </InputLabel>
                            <Select
                                labelId="product_brand_label"
                                id="product_brand"
                                name="brand"
                                label="Marca"
                                value={inputs.brand || ""}
                                onChange={handleChange}
                            >
                                {brandsList.map((element, index) => {
                                    return (
                                        <MenuItem value={element} key={index}>
                                            {element.name}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                        <IconButton
                            color="primary"
                            variant="outlined"
                            sx={{ ml: 2 }}
                        >
                            <AddIcon />
                        </IconButton>
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <div style={{ display: "flex" }}>
                        <FormControl fullWidth variant="standard">
                            <InputLabel id="product_model_label">
                                Modelo
                            </InputLabel>
                            <Select
                                labelId="product_model_label"
                                id="product_model"
                                label="Modelo"
                                name="model"
                                value={inputs.model || ""}
                                onChange={handleChange}
                            >
                                {modelList.length > 0 ? (
                                    modelList.map((element, index) => {
                                        return (
                                            <MenuItem
                                                value={element}
                                                key={index}
                                            >
                                                {element.name}
                                            </MenuItem>
                                        );
                                    })
                                ) : (
                                    <MenuItem value={null} disabled>
                                        La marca no posee modelos
                                    </MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        <IconButton
                            color="primary"
                            variant="outlined"
                            sx={{ ml: 2 }}
                        >
                            <AddIcon />
                        </IconButton>
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        label="Cantidad"
                        id="product_amount"
                        variant="standard"
                        type="number"
                        inputProps={{
                            min: 1,
                        }}
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
                            min: 1,
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
