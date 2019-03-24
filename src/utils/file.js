import XLSX from 'xlsx';
import { _ } from '@/utils/cdn';

// 字符串转ArrayBuffer
function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i !== s.length; i += 1) {
        view[i] = s.charCodeAt(i) & 0xFF; // eslint-disable-line
    }
    return buf;
}

// 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
function sheet2blob(sheet, sheetName = 'sheet1') {
    const workbook = {
        SheetNames: [sheetName],
        Sheets: {},
    };

    workbook.Sheets[sheetName] = sheet;

    // 生成excel的配置项
    const wopts = {
        bookType: 'xlsx', // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: 'binary',
    };

    const wbout = XLSX.write(workbook, wopts);
    const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });

    return blob;
}

/**
 * 通用的打开下载对话框方法，没有测试过具体兼容性
 * @param param 下载地址，也可以是一个blob对象，必选
 * @param saveName 保存文件名，可选
 */
function openDownloadDialog(param, saveName) {
    let url = param;
    if (typeof url === 'object' && url instanceof Blob) {
        url = URL.createObjectURL(url);
    }
    const link = document.createElement('a');
    link.href = url;
    link.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效

    let event = null;
    if (window.MouseEvent) {
        event = new MouseEvent('click');
    } else {
        event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }
    link.dispatchEvent(event);
}

/**
 * 导出excel
 *
 * @param {data[json], headerProp[string], headerName[string], name} args
 * @returns
 */
function export2excel(param) {
    const args = Object.assign({ name: 'excel.xlsx' }, param);

    const option = {};
    if (args.headerProp) {
        option.header = args.headerProp;
    }

    // 表头，必须要有headerProp和headerName
    const row = {};
    if (args.headerName) {
        args.headerProp.forEach((key, index) => {
            row[key] = args.headerName[index];
        });

        option.skipHeader = true;
    }

    // 复制一个，防止改变源数据
    const data = [...args.data];

    // 表头数据不为空，则在第一行增加一条数据
    if (!_.isEmpty(row)) {
        data.splice(0, 0, row);
    }

    const list = [];
    data.forEach((item) => {
        list.push(_.pick(item, args.headerProp));
    });

    const wb = XLSX.utils.json_to_sheet(list, option);
    const blob = this.sheet2blob(wb);

    this.openDownloadDialog(blob, args.name);
}

export default {
    sheet2blob,
    openDownloadDialog,
    export2excel,
};
