var ListPO = function ListPO() {

  this.rows = element.all(by.repeater('activity in vm.activities'));

  this.getRow = function(index) {
    var row = this.rows.get(index);

    return new RowElement(row);
  };

  function RowElement(row) {
    this.row = row;
    this.getType = function() {
      return this.row.element(by.binding('activity.type.name')).getText();
    };

    this.getCount = function() {
      return this.row.element(by.binding('activity.count')).getText();
    };
  }
};

module.exports = ListPO;