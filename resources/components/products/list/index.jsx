import DataTable from "../../utils/DataTable"

export function ProductList(){

    const config = {
        title: "Productos",
        route: "products",
        headers: ["Nombre"],
        visible: ["name"],
    };

    return(
        <DataTable
           {...config}
        />
    )
}