import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize"
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
// import InventoryIcon from "@mui/icons-material/Inventory"
// import StoreIcon from "@mui/icons-material/Store"
// import StarsIcon from "@mui/icons-material/Stars"
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
// import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount"
import { useNavigate } from "react-router-dom";
import { icons } from "../helper/ListIcons";
import { useLocation } from "react-router-dom";

// const icons = [
//   {
//     icon: <DashboardCustomizeIcon />,
//     title: "Dashboard",
//     url: "/stock/",
//   },
//   {
//     title: "Purchase",
//     icon: <ShoppingCartIcon />,
//     url: "/stock/purchases/",
//   },
//   {
//     title: "Sales",
//     icon: <AttachMoneyIcon />,
//     url: "/stock/sales/",
//   },
//   {
//     title: "Firms",
//     icon: <StoreIcon />,
//     url: "/stock/firms/",
//   },
//   {
//     title: "Brands",
//     icon: <StarsIcon />,
//     url: "/stock/brands/",
//   },
//   {
//     title: "Products",
//     icon: <InventoryIcon />,
//     url: "/stock/products/",
//   },
//   {
//     title: "Admin Panel",
//     icon: <SupervisorAccountIcon />,
//     url: "https://10001.fullstack.clarusway.com/admin",
//   },
// ]

const MenuListItems = () => {
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState("/stock/");

  const location = useLocation();
  const isLinkActive = (path) => {
    // console.log(path, "path.pathname");
    // console.log(location.pathname, "loc.pathname");
    // console.log(selectedItem, "selecteditem");
    return path === selectedItem
    
  };

  return (
    <div>
      <List sx={{ backgroundColor: "rgb(37,47,58)" }}>
        {icons.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => {
              navigate(item.url)
              setSelectedItem(item.url)
            }}
            sx={{
              color: "white",
              "&.MuiSvgIcon-root": { color: "white" },
              "&:hover": { color: "red" },
              "&:hover .MuiSvgIcon-root": { color: "red" },
              ...(isLinkActive(item.url) || selectedItem === item.url
                ? { color: "blue" }
                : {})
            }}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
