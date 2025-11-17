import DrawerRoutes from "@/src/components/Routes/Drawer.routes";


console.log(">>> DrawerRoutes é:", DrawerRoutes);

export default function RootLayout() {
  
  console.log(">>> RootLayout carregou");
  return (
       <DrawerRoutes />
  );
}