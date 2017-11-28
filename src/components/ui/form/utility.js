
export function resolveClassName(className, error = false) {
    let resolvedClassName = 'form-control'

    if (className.length > 0) {
        resolvedClassName += ' ' + className
    }

    if (error) {
        resolvedClassName += ' is-invalid'
    }

    return resolvedClassName
}
