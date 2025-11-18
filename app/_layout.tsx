import DrawerRoutes from "@/src/components/Routes/Drawer.routes";

export default function RootLayout() {
  console.log(">>> DrawerRoutes é:", DrawerRoutes);
  console.log(">>> RootLayout carregou");
  return (
       <DrawerRoutes />
  );
}