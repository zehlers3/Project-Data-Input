function addMethod() {
        const container = document.getElementById('methods');
        const div = document.createElement('div');
        div.innerHTML = `
            <label for="method">Method:</label>
            <select name="method[]">
                <option value="Carb Method 501">Carb Method 501</option>
                <option value="CTM-013">CTM-013</option>
                <option value="CTM-013 (IC Analyzer)">CTM-013 (IC Analyzer)</option>
                <option value="CTM-027">CTM-027</option>
                <option value="CTM-042">CTM-042</option>
                <option value="Method 11">Method 11</option>
                <option value="Method 12">Method 12</option>
                <option value="Method 13B">Method 13B</option>
                <option value="Method 16A">Method 16A</option>
                <option value="Method 16C">Method 16C</option>
                <option value="Method 17">Method 17</option>
                <option value="Method 18">Method 18</option>
                <option value="Method 2">Method 2</option>
                <option value="Method 201">Method 201</option>
                <option value="Method 201A">Method 201A</option>
                <option value="Method 202">Method 202</option>
                <option value="Method 22">Method 22</option>
                <option value="Method 23">Method 23</option>
                <option value="Method 23 PCB">Method 23 PCB</option>
                <option value="Method 25">Method 25</option>
                <option value="Method 25A">Method 25A</option>
                <option value="Method 25C">Method 25C</option>
                <option value="Method 26">Method 26</option>
                <option value="Method 26A">Method 26A</option>
                <option value="Method 26A (IC Analyzer)">Method 26A (IC Analyzer)</option>
                <option value="Method 29">Method 29</option>
                <option value="Method 2C">Method 2C</option>
                <option value="Method 2E">Method 2E</option>
                <option value="Method 2G">Method 2G</option>
                <option value="Method 2F">Method 2F</option>
                <option value="Method 30B">Method 30B</option>
                <option value="Method 30B (Lumex on Site)">Method 30B (Lumex on Site)</option>
                <option value="Method 323">Method 323</option>
                <option value="Method 4">Method 4</option>
                <option value="Method 5">Method 5</option>
                <option value="Method 5 (PM Lab on Site)">Method 5 (PM Lab on Site)</option>
                <option value="Method 5A">Method 5A</option>
                <option value="Method 5B">Method 5B</option>
                <option value="Method 5D">Method 5D</option>
                <option value="Method 5E">Method 5E</option>
                <option value="Method 204">Method 204</option>
                <option value="Method 204B">Method 204B</option>
                <option value="Method 204D">Method 204D</option>
                <option value="Method 3A">Method 3A</option>
                <option value="Method 6">Method 6</option>
                <option value="Method 8">Method 8</option>
                <option value="Method 8A">Method 8A</option>
                <option value="Method 9">Method 9</option>
                <option value="OTM 45 PFSA">OTM 45 PFSA</option>
                <option value="SW-846 0010">SW-846 0010</option>
                <option value="SW-846 0030">SW-846 0030</option>
                <option value="SW-846 0061">SW-846 0061</option>
                <option value="TO-15">TO-15</option>
                <option value="(ALT-001)">(ALT-001)</option>
                <option value="(ALT-010)">(ALT-010)</option>
                <option value="(ALT-043)">(ALT-043)</option>
            </select>
            <label for="runs">Number of runs:</label>
            <input type="number" name="runs[]">
            <label for="testLocations">Number of test locations:</label>
            <input type="number" name="testLocations[]">
        `;
        container.appendChild(div);
    }

    function submitForm() {
        const form = document.getElementById('dataForm');
        const formData = new FormData(form);
        const clientName = formData.get('clientName');
        const projectNumber = formData.get('projectNumber');
        const location = formData.get('location');
        const startDate = formData.get('startDate');
        const methods = formData.getAll('method[]');
        const runs = formData.getAll('runs[]').map(Number);
        const testLocations = formData.getAll('testLocations[]').map(Number);
	const methodsString = methods.join(', ');

        let ds004 = 0; ds005 = 0; ds005a = 0; ds036 = 0; ds010 = 0; ds008 = 0; ds009 = 0; ds016 = 0; ds041 = 0; ds001 = 0; ds015 = 0; ds015a = 0; ds029 = 0; ds031 = 0; ds030 = 0; ds028 = 0; ds027 = 0; ds026 = 0; ds047 = 0; ds023 = 0; ds024 = 0; ds011a = 0; ds012b = 0; ds005c = 0; ds017 = 0; ds018 = 0; ds019 = 0; ds020 = 0; ds002 = 0; ds021 = 0; ds011 = 0; ds012 = 0; ds012a = 0; ds045 = 0; ds005b = 0
        methods.forEach((method, i) => {
            const runValue = runs[i];
            const testLocationValue = testLocations[i];
            switch (method) {
                case "Carb Method 501":
                    ds004 += .5 * runValue;
            	    ds005 += 2 * runValue;
            	    ds005a += 1.5 * runValue;
                    ds036 += .3333 * runValue;                    
                    break;
		case "CTM-013":
		    ds010 += 1.5 * runValue;
            	    ds005a += 1.5 * runValue;
           	    ds008 += .5 * runValue;
            	    ds009 += .5 * runValue;
		    break;
		case "CTM-013 (IC Analyzer)":
            	    ds010 += 1.5 * runValue;
            	    ds005a += 1.5 * runValue;
		    break;
		case "CTM-027":
            	    ds004 += .5 * runValue;
          	    ds005 += 2 * runValue;
           	    ds005a += 1.5 * runValue;
		    break;
		case "CTM-042":
            	    ds001 += 1.5 * runValue;
		    break;
		case "Method 11":
            	    ds016 += 1.5 * runValue; 
            	    ds041 += 1.5 * runValue; 
		    break;
		case "Method 12":
            	    ds004 += .5 * runValue;
           	    ds005 += 2 * runValue;
           	    ds005a += 1.5 * runValue;
		    break;
		case "Method 13B":
           	    ds004 += .5 * runValue;
           	    ds005 += 2 * runValue;
            	    ds010 += 1.5 * runValue;
           	    ds005a += 1.5 * runValue;
          	    ds008 += .5 * runValue;
             	    ds009 += .5 * runValue;
		    break;
		case "Method 16A":
            	    ds015 += 1.5 * runValue;
            	    ds015a += .666666 * runValue;
           	    ds008 += 1 * runValue;
		    break;
		case "Method 16C":
           	    ds029 += 1.5 * testLocationValue;
           	    ds031 += 1.5 * testLocationValue;
           	    ds030 += 1.5 * testLocationValue;
          	    ds028 += 1.5 * testLocationValue;
          	    ds027 += 1.5 * testLocationValue;
		    break;
		case "Method 17":
            	    ds004 += .5 * runValue;
          	    ds026 += 2 * runValue;
           	    ds005a += 1.5 * runValue;
          	    ds036 += .5 * runValue;
		    break;
		case "Method 18":
            	    ds047 += 1.5 * runValue;
		    break;
		case "Method 2":
            	    ds001 += 1.5 * runValue;
		    break;
		case "Method 201":
            	    ds004 += .5 * runValue;
            	    ds005 += 2 * runValue;
            	    ds005a += 1.5 * runValue;
           	    ds036 += .5 * runValue;
		    break;
		case "Method 201A":
		    ds004 += .5 * runValue;
            	    ds005 += 2 * runValue;
            	    ds005a += 1.5 * runValue;
           	    ds036 += .5 * runValue;
		    break;
		case "Method 202":
            	    ds004 += .5 * runValue;
           	    ds005b += 2 * runValue;
            	    ds005a += 1.5 * runValue;
            	    ds036 += .5 * runValue;
		    break;
		case "Method 22":
            	    ds011a += 1.5 * runValue;
            	    ds012b += 1.5 * runValue;
		    break;
		case "Method 23":
            	    ds004 += .5 * runValue;
            	    ds005c += 2 * runValue;
           	    ds005a += 1.5 * runValue;
		    break;
		case "Method 23 PCB":
		    ds004 += .5 * runValue;
            	    ds005c += 2 * runValue;
           	    ds005a += 1.5 * runValue;
		    break;
		case "Method 25":
            	    ds017 += 1.5 * runValue;
		    break;
		case "Method 25A":
            	    ds018 += 1.5 * testLocationValue;
            	    ds019 += 1.5 * runValue;
		    break;
		case "Method 25C":
            	    ds020 += 1.5 * runValue;
		    break;
		case "Method 26":
            	    ds004 += .5 * runValue;
            	    ds005 += 2 * runValue;
            	    ds005a += 1.5 * runValue;
            	    ds016 += 1.5 * runValue;
		    break;
		case "Method 26A":
            	    ds004 += .5 * runValue;
           	    ds005 += 2 * runValue;
           	    ds005a += 1.5 * runValue;
		    break;
		case "Method 26A (IC Analyzer)":
		    ds004 += .5 * runValue;
           	    ds005 += 2 * runValue;
           	    ds005a += 1.5 * runValue;
		    break;
		case "Method 29":
		    ds004 += .5 * runValue;
           	    ds005 += 2 * runValue;
           	    ds005a += 1.5 * runValue;
		    break;
		case "Method 2C":
            	    ds001 += 1.5 * runValue;
		    break;
		case "Method 2E":
		    ds001 += 1.5 * runValue;
		    break;
		case "Method 2G":
		    ds001 += 1.5 * runValue;
		    break;
		case "Method 2F":
          	    ds002 += 1.5 * runValue;
		    break;
		case "Method 30B":
            	    ds021 += 1.5 * runValue;
		    break;
		case "Method 30B (Lumex on Site)":
		    ds021 += 1.5 * runValue;
		    break;
		case "Method 323":
            	    ds016 += 1 * runValue;
		    break;
		case "Method 4":
            	    ds016 += 1 * runValue;
		    break;
		case "Method 5" :
            	    ds004 += .5 * runValue;
            	    ds005 += 2 * runValue;
            	    ds005a += 1.5 * runValue;
            	    ds036 += .5 * runValue;
		    break;
		case  "Method 5 (PM Lab on Site)":
		    ds004 += .5 * runValue;
            	    ds005 += 2 * runValue;
            	    ds005a += 1.5 * runValue;
            	    ds036 += .5 * runValue;
		    break;
		case "Method 5A": 
		    ds004 += .5 * runValue;
            	    ds005 += 2 * runValue;
            	    ds005a += 1.5 * runValue;
            	    ds036 += .5 * runValue;
		    break;
		case "Method 5B":
     		    ds004 += .5 * runValue;
            	    ds005 += 2 * runValue;
            	    ds005a += 1.5 * runValue;
            	    ds036 += .5 * runValue;
		    break;
		case "Method 5D":
		    ds004 += .5 * runValue;
            	    ds005 += 2 * runValue;
            	    ds005a += 1.5 * runValue;
            	    ds036 += .5 * runValue;
		    break;
		case "Method 5E":
            	    ds004 += .5;
		    break;
		case "Method 204":
            	    ds023 += 1.5 * testLocationValue;
           	    ds024 += 1.5 * testLocationValue;
		    break;
		case "Method 204B":
		    ds023 += 1.5 * testLocationValue;
           	    ds024 += 1.5 * testLocationValue;
		    break;
		case "Method 204D":
		    ds023 += 1.5 * testLocationValue;
           	    ds024 += 1.5 * testLocationValue;
		    break;
		case "Method 3A":
            	    ds029 += 3 * testLocationValue;
           	    ds031 += 3 * testLocationValue;
             	    ds030 += 3 * testLocationValue;
            	    ds028 += 3 * testLocationValue;
           	    ds027 += 3 * testLocationValue;
		    break;
		case "Method 6":
           	    ds008 += .5 * runValue;
            	    ds009 += .5 * runValue;
           	    ds016 += 1 * runValue;
		    break;
		case "Method 8":
            	    ds008 += .5 * runValue;
            	    ds009 += .5 * runValue;
            	    ds004 += .5 * runValue;
            	    ds005 += 2 * runValue;
            	    ds005a += 1.5 * runValue;
		    break;
		case "Method 8A":
            	    ds010 += 1.5 * runValue;
            	    ds005a += 1.5 * runValue;
            	    ds008 += .5 * runValue;
           	    ds009 += .5 * runValue;
		    break;
		case "Method 9":
            	    ds011 += 1.5 * runValue;
            	    ds012 += 1.5 * runValue;
            	    ds012a += 1.5 * runValue;
		    break;
		case "OTM 45 PFSA":
            	    ds004 += .5 * runValue;
            	    ds005 += 4 * runValue;
            	    ds005a += 1.5 * runValue;
		    break;
		case "SW-846 0010":
            	    ds004 += .5 * runValue;
           	    ds005c += 2 * runValue;
           	    ds005a += 1.5 * runValue;
		    break;
		case "SW-846 0030":
            	    ds016 += 1 * runValue;
		    break;
		case "SW-846 0061":
            	    ds004 += .5 * runValue;
           	    ds005c += 2 * runValue;
           	    ds005a += 1.5 * runValue;
		    break;
		case "TO-15":
            	    ds045 += 1.5 * runValue;
		    break;
		case "(ALT-001)":
            	    ds016 += 1 * runValue;
            	    ds008 += .5 * runValue;
            	    ds009 += .5 * runValue;
		    break;
		case "(ALT-010)":
            	    ds016 += 1.5 * runValue;
            	    ds041 += .33333 * runValue;
		    break;
		case "(ALT-043)":
            	    ds016 += 1.5 * runValue;
            	    ds004 += 0.5 * runValue;
           	    ds005 += 2 * runValue;
           	    ds005a += 1.5 * runValue;
                // Implement other cases as in your Python logic
            }
        });

        ds004 = Math.ceil(ds004);
    	ds005 = Math.ceil(ds005);
    	ds015 = Math.ceil(ds015);
    	ds008 = Math.ceil(ds008);
    	ds009 = Math.ceil(ds009);
    	ds001 = Math.ceil(ds001);
    	ds002 = Math.ceil(ds002);
    	ds005a = Math.ceil(ds005a);
    	ds005b = Math.ceil(ds005b);
    	ds005c = Math.ceil(ds005c);
    	ds011 = Math.ceil(ds011);
    	ds047 = Math.ceil(ds047);
    	ds045 = Math.ceil(ds045);
    	ds041 = Math.ceil(ds041);
    	ds036 = Math.ceil(ds036);
    	ds031 = Math.ceil(ds031);
   	ds030 = Math.ceil(ds030);
    	ds029 = Math.ceil(ds029);
    	ds028 = Math.ceil(ds028);
    	ds027 = Math.ceil(ds027);
    	ds026 = Math.ceil(ds026);
    	ds024 = Math.ceil(ds024);
    	ds023 = Math.ceil(ds023);
    	ds021 = Math.ceil(ds021);
    	ds020 = Math.ceil(ds020);
    	ds019 = Math.ceil(ds019);
    	ds018 = Math.ceil(ds018);
    	ds017 = Math.ceil(ds017);
    	ds016 = Math.ceil(ds016);
    	ds015a = Math.ceil(ds015a);
    	ds012b = Math.ceil(ds012b);
    	ds012a = Math.ceil(ds012a);
    	ds011a = Math.ceil(ds011a);
    	ds010 = Math.ceil(ds010);
    	ds012 = Math.ceil(ds012);

        const wb = XLSX.utils.book_new();
        const ws_name = "Project Data";
	const ws = XLSX.utils.aoa_to_sheet([
            ["Project Data Sheet"], [],
            ["Project Number:", projectNumber],
            ["Project Name:", clientName],
            ["Test Location:", location],
            ["Project Departure Date:", startDate],
	    ["Methods:", methodsString],
            [], 
            ["Data Sheets:", "Quanity:"],
	    ["ds001", ds001],
	    ["ds002", ds002],
	    ["ds004", ds004],
	    ["ds005", ds005],
	    ["ds005a", ds005a],
	    ["ds005b", ds005b],
	    ["ds005c", ds005c],
	    ["ds008", ds008],
	    ["ds009", ds009],
	    ["ds010", ds010],
	    ["ds011", ds011],
	    ["ds011", ds011a],
	    ["ds012", ds012],
	    ["ds012a", ds012a],
	    ["ds012b", ds012b],
	    ["ds015", ds015],
	    ["ds015a", ds015a],
	    ["ds016", ds016],
	    ["ds017", ds017],
	    ["ds018", ds018],
	    ["ds019", ds019],
	    ["ds020", ds020],
	    ["ds021", ds021],
	    ["ds023", ds023],
	    ["ds024", ds024],
	    ["ds026", ds026],
	    ["ds027", ds027],
	    ["ds028", ds028],
	    ["ds029", ds029],
	    ["ds030", ds030],
	    ["ds031", ds031],
	    ["ds036", ds036],
	    ["ds041", ds041],
	    ["ds045", ds045],
	    ["ds047", ds047],
        ]);        
	 ws['!cols'] = [
        {wch: 20}, // Width of column A
        {wch: 20}, // Width of column B
       ];
        XLSX.utils.book_append_sheet(wb, ws, ws_name);
        XLSX.writeFile(wb, 'ProjectData.xlsx');
    }