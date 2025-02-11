import PopOverMenu from "../UI/PopOverMenu";
import { IconDotsVertical, IconLoader2 } from "@tabler/icons-react";
import style from "./DataTable.module.css";
export default function DataTable({
  values = [],
  columns = {},
  actions = [],
  onRowClick = null,
  isLoading = false,
}) {
  const isActions = actions.length > 0;
  function makeActionMenu(key) {
    const menu = actions.map((action, idx) => (
      <button
        key={`${key}_${idx}`}
        onClick={() => action.action({ index: key })}
      >
        {action.label}
      </button>
    ));
    return (
      <PopOverMenu menu={menu}>
        <IconDotsVertical />
      </PopOverMenu>
    );
  }
  let rows = (
    <tr className={style.emptyData}>
      <td colspan={Object.keys(columns).length}>
        {isLoading ? (
          <IconLoader2 className="spinning-icon" />
        ) : (
          "No Data Available"
        )}
      </td>
    </tr>
  );
  if (values && !isLoading && values.length > 0) {
    rows = values.map((row, key) => (
      <tr
        key={key}
        className={onRowClick && style.clickable}
        onClick={onRowClick && (() => onRowClick({ index: key, value: row }))}
      >
        {Object.keys(columns).map((column) => (
          <td key={`${key}_${column}`}>{row[column]}</td>
        ))}
        {isActions && (
          <td className={style.actions} key={`${key}_actions`}>
            {makeActionMenu(key)}
          </td>
        )}
      </tr>
    ));
  }
  return (
    <table className={style.dataTable}>
      <thead>
        <tr>
          {Object.entries(columns).map(([key, value]) => {
            return <th key={key}>{value}</th>;
          })}
          {isActions && <th></th>}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
