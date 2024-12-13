export default function getListStudentIds(list) {
    let results = [];
  
    if (list instanceof Array) {
      results = list.map((x) => x.id);
    }
  
    return results;
  }