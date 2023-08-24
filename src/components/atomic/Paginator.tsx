interface PaginatorProps {
  page: number;
  setPage: (page: number) => void;
  maxPage: number;
}

export default function Paginator({ page, setPage, maxPage }: PaginatorProps) {
  return (
    <div class="flex flex-row">
      <PaginatorButton onClick={() => setPage(page - 1)} disabled={page === 1}>
        &#60;
      </PaginatorButton>
      <div class="w-2/12 text-center">
        {page}/{maxPage}
      </div>
      <PaginatorButton onClick={() => setPage(page + 1)} disabled={page >= maxPage}>
        &#62;
      </PaginatorButton>
    </div>
  );
}

interface PaginatorButton {
  children: string;
  onClick: () => void;
  disabled: boolean;
}

function PaginatorButton({ children, onClick, disabled }: PaginatorButton) {
  return (
    <button
      className="rounded bg-nord1 enabled:hover:bg-nord2 disabled:bg-nord0 disabled:text-nord1 w-5/12 shadow-sm"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
