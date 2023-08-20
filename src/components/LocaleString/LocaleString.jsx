export const LocaleString = ({ numero }) => {
    return (
        <span>
            $
            {numero.toLocaleString("es-AR", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
            })}
        </span>
    );
};