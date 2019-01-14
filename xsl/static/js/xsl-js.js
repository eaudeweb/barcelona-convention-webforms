$(document).ready(function() {
    tables = $('.table-measures');
    for (index = 0; index < tables.length; ++index){
        table = tables[index]
        rows = table.rows
        for(row_idx = 0; row_idx < rows.length - 1; ++row_idx){
            row = rows[row_idx];
            next_row = rows[row_idx + 1];
            next_art_title = next_row.children[0].children[0].textContent;

            if (next_art_title.length == 0) {
                next_data_div = next_row.children[0].children[1];
                row.children[0].appendChild(next_data_div);
                next_row.hidden = true;

                while(row_idx < rows.length - 1){
                    ++row_idx;
                    next_row = rows[row_idx + 1];
                    next_art_title = next_row.children[0].children[0].textContent;
                    if (next_art_title.length > 0) {
                        break;
                    }
                    next_data_div = next_row.children[0].children[1];
                    row.children[0].appendChild(next_data_div);
                    next_row.hidden = true;
                }
            }
        }
    }
});