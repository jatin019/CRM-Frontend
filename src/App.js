import './App.css'; 
import React from 'react';
import { DefaultLayout } from "./layout/DefaultLayout"
import { Entry } from "./pages/entry/Entry.page";
function App() {
  return (
    <div className="App">
    {/* <Entry /> */}
    <DefaultLayout>//Dashboard</DefaultLayout>
    </div>
  );
}

export default App;
