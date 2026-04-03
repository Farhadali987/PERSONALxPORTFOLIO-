/**
 * Serializes Prisma objects by converting Date instances to ISO strings
 * This prevents "stringify(<anonymous>)" errors when returning data from API routes
 */

export function serializePrismaObject<T>(obj: T): T {
  if (!obj || typeof obj !== 'object') {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(item => serializePrismaObject(item)) as T
  }

  const serialized: any = {}
  for (const [key, value] of Object.entries(obj)) {
    if (value instanceof Date) {
      serialized[key] = value.toISOString()
    } else if (value && typeof value === 'object') {
      serialized[key] = serializePrismaObject(value)
    } else {
      serialized[key] = value
    }
  }

  return serialized
}
