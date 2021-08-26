import DataFileTable from './data-file-table';
import UploadFile from './upload-file';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          
          <Route path="/upload-file">
            <UploadFile />
          </Route>

          <Route path="/">
            <DataFileTable />
          </Route>

        </Switch>
      </BrowserRouter>
      
    </div>
  );
}
