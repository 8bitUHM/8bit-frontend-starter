# 8bit Frontend Stack Starter

This template comes with a pre-configured TypeScript React & Tailwind frontend project with Webpack.

# Getting Started

1. Install project dependencies with ```npm install```

2. Run a project build with ```npm run build```

3. In the public folder right click the index.html and open with live server VSCode extension

4. Run the project in development mode (changes in code are real time updated) with ```npm run dev```

# Creating New Pages

1. Stop your ```npm run dev``` session if it's running

2. In the src/pages directory create a new .tsx file (MyNewPage.tsx in this example) and copy the following
  ```
  import * as React from "react";
  import { createRoot } from "react-dom/client";
  import "../styles/styles.css";
  import { initFlowbite } from "flowbite";

  const MyNewPage = () => {
    React.useEffect(() => {
      initFlowbite();
    }, []);

    return (
      <div>
        This is my new React page.
      </div>
    );
  };

  const root = document.getElementById("root");
  createRoot(root).render(<MyNewPage />);
  ```
  Make sure to change the function component name to what you're actually naming your page along with the component in createRoot(root).render();

3. Run a build again with ```npm run build``` or start development mode again with ```npm run dev```

4. Create a new HTML page in public (mynewpage.html in this example) -- can copy contents from index.html and change the page title and the ```<script src="./dist/Index.js"></script>``` on line 10 to match the new page JavaScript dist file which would be ```<script src="./dist/MyNewPage.js"></script>``` in this case