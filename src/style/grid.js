import styled from "styled-components";

// eslint-disable-next-line no-unused-vars
let Grid;

export default Grid = styled.div`
        /* Mobile */
    .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    
    .container-fluid {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    
    .row {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }
    
    .col--1-smart {
        grid-column: span 1;
    }
    
    .col--2-smart {
        grid-column: span 2;
    }
    
    .col--3-smart {
        grid-column: span 3;
    }
    
    .col--4-smart {
        grid-column: span 4;
    }
    
    .col--5-smart {
        grid-column: span 5;
    }
    
    .col--6-smart {
        grid-column: span 6;
    }
    
    .col--7-smart {
        grid-column: span 7;
    }
    
    .col--8-smart {
        grid-column: span 8;
    }
    
    .col--9-smart {
        grid-column: span 9;
    }
    
    .col--10-smart {
        grid-column: span 10;
    }
    
    .col--11-smart {
        grid-column: span 11;
    }
    
    .col--12-smart {
        grid-column: span 12;
    }
    
    .col--1 {
        grid-column: span 1;
    }
    
    .col--2 {
        grid-column: span 2;
    }
    
    .col--3 {
        grid-column: span 3;
    }
    
    .col--4 {
        grid-column: span 4;
    }
    
    .col--5 {
        grid-column: span 5;
    }
    
    .col--6 {
        grid-column: span 6;
    }
    
    .col--7 {
        grid-column: span 7;
    }
    
    .col--8 {
        grid-column: span 8;
    }
    
    .col--9 {
        grid-column: span 9;
    }
    
    .col--10 {
        grid-column: span 10;
    }
    
    .col--11 {
        grid-column: span 11;
    }
    
    .col--12 {
        grid-column: span 12;
    }
    
    /* Tablette */
    @media screen and (min-width: 768px) {
        .container {
            width: 750px;
        }
    
        .hidden-tablet {
            display: none !important;
        }
    
        .visible-tablet {
            display: block !important;
        }
    
        .col--1-tablet {
            grid-column: span 1;
        }
    
        .col--2-tablet {
            grid-column: span 2;
        }
    
        .col--3-tablet {
            grid-column: span 3;
        }
    
        .col--4-tablet {
            grid-column: span 4;
        }
    
        .col--5-tablet {
            grid-column: span 5;
        }
    
        .col--6-tablet {
            grid-column: span 6;
        }
    
        .col--7-tablet {
            grid-column: span 7;
        }
    
        .col--8-tablet {
            grid-column: span 8;
        }
    
        .col--9-tablet {
            grid-column: span 9;
        }
    
        .col--10-tablet {
            grid-column: span 10;
        }
    
        .col--11-tablet {
            grid-column: span 11;
        }
    
        .col--12-tablet {
            grid-column: span 12;
        }
    }
    
    /* Ordinateur */
    @media screen and (min-width: 1280px) {
        .container {
            width: 1255px;
        }
    
        .hidden-desk {
            display: none !important;
        }
    
        .visible-desk {
            display: block !important;
        }
    
        .col--1-desk {
            grid-column: span 1;
        }
    
        .col--2-desk {
            grid-column: span 2;
        }
    
        .col--3-desk {
            grid-column: span 3;
        }
    
        .col--4-desk {
            grid-column: span 4;
        }
    
        .col--5-desk {
            grid-column: span 5;
        }
    
        .col--6-desk {
            grid-column: span 6;
        }
    
        .col--7-desk {
            grid-column: span 7;
        }
    
        .col--8-desk {
            grid-column: span 8;
        }
    
        .col--9-desk {
            grid-column: span 9;
        }
    
        .col--10-desk {
            grid-column: span 10;
        }
    
        .col--11-desk {
            grid-column: span 11;
        }
    
        .col--12-desk {
            grid-column: span 12;
        }
    }
    
    /*Full HD*/
    @media screen and (min-width: 1920px) {
        .container {
            width: 1800px;
        }
    
        .hidden-desk-xl {
            display: none !important;
        }
    
        .visible-desk-xl {
            display: block !important;
        }
    
        .col--1-desk-xl {
            grid-column: span 1;
        }
    
        .col--2-desk-xl {
            grid-column: span 2;
        }
    
        .col--3-desk-xl {
            grid-column: span 3;
        }
    
        .col--4-desk-xl {
            grid-column: span 4;
        }
    
        .col--5-desk-xl {
            grid-column: span 5;
        }
    
        .col--6-desk-xl {
            grid-column: span 6;
        }
    
        .col--7-desk-xl {
            grid-column: span 7;
        }
    
        .col--8-desk-xl {
            grid-column: span 8;
        }
    
        .col--9-desk-xl {
            grid-column: span 9;
        }
    
        .col--10-desk-xl {
            grid-column: span 10;
        }
    
        .col--11-desk-xl {
            grid-column: span 11;
        }
    
        .col--12-desk-xl {
            grid-column: span 12;
        }
    }
    
    /*4K*/
    @media screen and (min-width: 3800px) {
        .container {
            width: 3500px;
        }
    
        .hidden-desk-xxl {
            display: none !important;
        }
    
        .visible-desk-xxl {
            display: block !important;
        }
    
        .col--1-desk-xxl {
            grid-column: span 1;
        }
    
        .col--2-desk-xxl {
            grid-column: span 2;
        }
    
        .col--3-desk-xxl {
            grid-column: span 3;
        }
    
        .col--4-desk-xxl {
            grid-column: span 4;
        }
    
        .col--5-desk-xxl {
            grid-column: span 5;
        }
    
        .col--6-desk-xxl {
            grid-column: span 6;
        }
    
        .col--7-desk-xxl {
            grid-column: span 7;
        }
    
        .col--8-desk-xxl {
            grid-column: span 8;
        }
    
        .col--9-desk-xxl {
            grid-column: span 9;
        }
    
        .col--10-desk-xxl {
            grid-column: span 10;
        }
    
        .col--11-desk-xxl {
            grid-column: span 11;
        }
    
        .col--12-desk-xxl {
            grid-column: span 12;
        }
    }
`;
