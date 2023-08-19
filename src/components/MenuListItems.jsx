// import React, { useState } from "react";
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
import { useSelector } from "react-redux";

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

const MenuListItems = ({ selectedItem, setSelectedItem }) => {
  const navigate = useNavigate();
  const { isAdmin } = useSelector((state) => state.auth);

  const isLinkActive = (path) => {
    return path === selectedItem;
  };

  return (
    <div>
      <List sx={{ backgroundColor: "rgb(37,47,58)" }}>
        {icons.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            // onClick={() => {
            //   navigate(item.url)
            //   setSelectedItem(item.url)
            // }} fixed with below codes because of item.url coming from source as a url not as a path. when it comes as a url (include http or www or .com) ternary true works else navigate will work.
            onClick={() => {
              item.url.includes("http" || "www" || ".com")
                ? isAdmin // if the user is admin 
                  ? window.open(item.url, "_blank")//then can go admin page
                  : navigate("/stock/no/") // else user sees the no auth page
                : navigate(item.url);
                setSelectedItem(item.url)
            }}
            sx={{
              color: "white",
              "&.MuiSvgIcon-root": { color: "white" },
              "&:hover": { color: "red" },
              "&:hover .MuiSvgIcon-root": { color: "red" },
              ...(isLinkActive(item.url) || selectedItem === item.url
                ? { textDecoration: "underline", color: "#bebe" }
                : {}),
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
