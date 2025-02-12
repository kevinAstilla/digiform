import PopOverMenu from "./PopOverMenu";
import Button from "./Button";
import {
  IconDotsVertical,
  IconLoader2,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import style from "./DataTable.module.css";

export default function DataTable({
  values = [],
  columns = {},
  actions = [],
  isLoading = false,
  isPaginated = false,
  currentPage = 1,
  totalPages = 1,
  onRowClick = null,
  onClickPageButton,
  onClickPreviousPage = null,
  onClickNextPage = null,
}) {
  const isActions = actions.length > 0;
  const colLen = Object.keys(columns).length;
  const pageButtons = isPaginated
    ? [...Array(totalPages)].map((_, i) => (
        <Button
          onClick={() => onClickPageButton(i + 1)}
          key={i + 1}
          disabled={i + 1 === Number(currentPage)}
          textOnly
        >
          {i + 1}
        </Button>
      ))
    : null;
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
      <td colSpan={colLen}>
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
      {isPaginated && (
        <tfoot>
          <tr>
            <td colSpan={colLen}>
              <span
                style={{
                  display: "flex",
                  gap: "4px",
                  justifyContent: "center",
                }}
              >
                {
                  <Button
                    rounded
                    outlined
                    disabled={Number(currentPage) === 1}
                    onClick={onClickPreviousPage}
                  >
                    <IconChevronLeft size={16} />
                  </Button>
                }
                {pageButtons}
                {
                  <Button
                    rounded
                    outlined
                    disabled={currentPage === totalPages}
                    onClick={onClickNextPage}
                  >
                    <IconChevronRight size={16} />
                  </Button>
                }
              </span>
            </td>
          </tr>
        </tfoot>
      )}
    </table>
  );
}
