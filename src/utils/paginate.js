import _ from 'lodash';
export function paginate(items, pageNumber, pageSize) {
    // gía trị bắt đầu của item in page 
    const startIndex = (pageNumber - 1) * pageSize;
    // convert items array to lodash object wrapper
    // _(items) convert lodash object
    // .slice vị trí bắt đầu mà sẽ được tách từ mảng item
    // take() số lượng phần tử được tách
    // cuối cùng .value convert lodash to array
    return _(items).slice(startIndex).take(pageSize).value();
}