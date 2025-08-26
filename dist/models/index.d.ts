
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model project_manager
 * 
 */
export type project_manager = $Result.DefaultSelection<Prisma.$project_managerPayload>
/**
 * Model project
 * 
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>
/**
 * Model data_entry
 * 
 */
export type data_entry = $Result.DefaultSelection<Prisma.$data_entryPayload>
/**
 * Model blogs
 * 
 */
export type blogs = $Result.DefaultSelection<Prisma.$blogsPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model tag
 * 
 */
export type tag = $Result.DefaultSelection<Prisma.$tagPayload>
/**
 * Model comment
 * 
 */
export type comment = $Result.DefaultSelection<Prisma.$commentPayload>
/**
 * Model Donation
 * 
 */
export type Donation = $Result.DefaultSelection<Prisma.$DonationPayload>
/**
 * Model VolunteerApplication
 * 
 */
export type VolunteerApplication = $Result.DefaultSelection<Prisma.$VolunteerApplicationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  project_manager: 'project_manager',
  super_admin: 'super_admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  Available: 'Available',
  Pending: 'Pending',
  Completed: 'Completed',
  Rejected: 'Rejected',
  Approved: 'Approved',
  Inactive: 'Inactive',
  Active: 'Active',
  Suspend: 'Suspend'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project_manager`: Exposes CRUD operations for the **project_manager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Project_managers
    * const project_managers = await prisma.project_manager.findMany()
    * ```
    */
  get project_manager(): Prisma.project_managerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.projectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.data_entry`: Exposes CRUD operations for the **data_entry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Data_entries
    * const data_entries = await prisma.data_entry.findMany()
    * ```
    */
  get data_entry(): Prisma.data_entryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogs`: Exposes CRUD operations for the **blogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blogs.findMany()
    * ```
    */
  get blogs(): Prisma.blogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.tagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.commentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donation`: Exposes CRUD operations for the **Donation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donations
    * const donations = await prisma.donation.findMany()
    * ```
    */
  get donation(): Prisma.DonationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volunteerApplication`: Exposes CRUD operations for the **VolunteerApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VolunteerApplications
    * const volunteerApplications = await prisma.volunteerApplication.findMany()
    * ```
    */
  get volunteerApplication(): Prisma.VolunteerApplicationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    admin: 'admin',
    project_manager: 'project_manager',
    project: 'project',
    data_entry: 'data_entry',
    blogs: 'blogs',
    category: 'category',
    tag: 'tag',
    comment: 'comment',
    Donation: 'Donation',
    VolunteerApplication: 'VolunteerApplication'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "project_manager" | "project" | "data_entry" | "blogs" | "category" | "tag" | "comment" | "donation" | "volunteerApplication"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      project_manager: {
        payload: Prisma.$project_managerPayload<ExtArgs>
        fields: Prisma.project_managerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.project_managerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_managerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.project_managerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_managerPayload>
          }
          findFirst: {
            args: Prisma.project_managerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_managerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.project_managerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_managerPayload>
          }
          findMany: {
            args: Prisma.project_managerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_managerPayload>[]
          }
          create: {
            args: Prisma.project_managerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_managerPayload>
          }
          createMany: {
            args: Prisma.project_managerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.project_managerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_managerPayload>
          }
          update: {
            args: Prisma.project_managerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_managerPayload>
          }
          deleteMany: {
            args: Prisma.project_managerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.project_managerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.project_managerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_managerPayload>
          }
          aggregate: {
            args: Prisma.Project_managerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject_manager>
          }
          groupBy: {
            args: Prisma.project_managerGroupByArgs<ExtArgs>
            result: $Utils.Optional<Project_managerGroupByOutputType>[]
          }
          count: {
            args: Prisma.project_managerCountArgs<ExtArgs>
            result: $Utils.Optional<Project_managerCountAggregateOutputType> | number
          }
        }
      }
      project: {
        payload: Prisma.$projectPayload<ExtArgs>
        fields: Prisma.projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      data_entry: {
        payload: Prisma.$data_entryPayload<ExtArgs>
        fields: Prisma.data_entryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.data_entryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_entryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.data_entryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_entryPayload>
          }
          findFirst: {
            args: Prisma.data_entryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_entryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.data_entryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_entryPayload>
          }
          findMany: {
            args: Prisma.data_entryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_entryPayload>[]
          }
          create: {
            args: Prisma.data_entryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_entryPayload>
          }
          createMany: {
            args: Prisma.data_entryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.data_entryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_entryPayload>
          }
          update: {
            args: Prisma.data_entryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_entryPayload>
          }
          deleteMany: {
            args: Prisma.data_entryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.data_entryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.data_entryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_entryPayload>
          }
          aggregate: {
            args: Prisma.Data_entryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateData_entry>
          }
          groupBy: {
            args: Prisma.data_entryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Data_entryGroupByOutputType>[]
          }
          count: {
            args: Prisma.data_entryCountArgs<ExtArgs>
            result: $Utils.Optional<Data_entryCountAggregateOutputType> | number
          }
        }
      }
      blogs: {
        payload: Prisma.$blogsPayload<ExtArgs>
        fields: Prisma.blogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          findFirst: {
            args: Prisma.blogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          findMany: {
            args: Prisma.blogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>[]
          }
          create: {
            args: Prisma.blogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          createMany: {
            args: Prisma.blogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.blogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          update: {
            args: Prisma.blogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          deleteMany: {
            args: Prisma.blogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.blogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          aggregate: {
            args: Prisma.BlogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogs>
          }
          groupBy: {
            args: Prisma.blogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.blogsCountArgs<ExtArgs>
            result: $Utils.Optional<BlogsCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      tag: {
        payload: Prisma.$tagPayload<ExtArgs>
        fields: Prisma.tagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          findFirst: {
            args: Prisma.tagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          findMany: {
            args: Prisma.tagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>[]
          }
          create: {
            args: Prisma.tagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          createMany: {
            args: Prisma.tagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          update: {
            args: Prisma.tagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          deleteMany: {
            args: Prisma.tagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.tagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      comment: {
        payload: Prisma.$commentPayload<ExtArgs>
        fields: Prisma.commentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          findFirst: {
            args: Prisma.commentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          findMany: {
            args: Prisma.commentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>[]
          }
          create: {
            args: Prisma.commentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          createMany: {
            args: Prisma.commentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.commentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          update: {
            args: Prisma.commentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          deleteMany: {
            args: Prisma.commentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.commentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.commentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Donation: {
        payload: Prisma.$DonationPayload<ExtArgs>
        fields: Prisma.DonationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findFirst: {
            args: Prisma.DonationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findMany: {
            args: Prisma.DonationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          create: {
            args: Prisma.DonationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          createMany: {
            args: Prisma.DonationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DonationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          update: {
            args: Prisma.DonationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          deleteMany: {
            args: Prisma.DonationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DonationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          aggregate: {
            args: Prisma.DonationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonation>
          }
          groupBy: {
            args: Prisma.DonationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationCountArgs<ExtArgs>
            result: $Utils.Optional<DonationCountAggregateOutputType> | number
          }
        }
      }
      VolunteerApplication: {
        payload: Prisma.$VolunteerApplicationPayload<ExtArgs>
        fields: Prisma.VolunteerApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VolunteerApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VolunteerApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerApplicationPayload>
          }
          findFirst: {
            args: Prisma.VolunteerApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VolunteerApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerApplicationPayload>
          }
          findMany: {
            args: Prisma.VolunteerApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerApplicationPayload>[]
          }
          create: {
            args: Prisma.VolunteerApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerApplicationPayload>
          }
          createMany: {
            args: Prisma.VolunteerApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VolunteerApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerApplicationPayload>
          }
          update: {
            args: Prisma.VolunteerApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerApplicationPayload>
          }
          deleteMany: {
            args: Prisma.VolunteerApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VolunteerApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VolunteerApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerApplicationPayload>
          }
          aggregate: {
            args: Prisma.VolunteerApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolunteerApplication>
          }
          groupBy: {
            args: Prisma.VolunteerApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VolunteerApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VolunteerApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<VolunteerApplicationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: adminOmit
    project_manager?: project_managerOmit
    project?: projectOmit
    data_entry?: data_entryOmit
    blogs?: blogsOmit
    category?: categoryOmit
    tag?: tagOmit
    comment?: commentOmit
    donation?: DonationOmit
    volunteerApplication?: VolunteerApplicationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    blog: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | AdminCountOutputTypeCountBlogArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountBlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blogsWhereInput
  }


  /**
   * Count Type Project_managerCountOutputType
   */

  export type Project_managerCountOutputType = {
    project: number
  }

  export type Project_managerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Project_managerCountOutputTypeCountProjectArgs
  }

  // Custom InputTypes
  /**
   * Project_managerCountOutputType without action
   */
  export type Project_managerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_managerCountOutputType
     */
    select?: Project_managerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Project_managerCountOutputType without action
   */
  export type Project_managerCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    data_entry: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data_entry?: boolean | ProjectCountOutputTypeCountData_entryArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountData_entryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: data_entryWhereInput
  }


  /**
   * Count Type BlogsCountOutputType
   */

  export type BlogsCountOutputType = {
    comments: number
  }

  export type BlogsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | BlogsCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * BlogsCountOutputType without action
   */
  export type BlogsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogsCountOutputType
     */
    select?: BlogsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogsCountOutputType without action
   */
  export type BlogsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    blog: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | CategoryCountOutputTypeCountBlogArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blogsWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    blog: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | TagCountOutputTypeCountBlogArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountBlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blogsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    role: number
    profile_image: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    fullname: string
    email: string
    role: $Enums.Role
    profile_image: string | null
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    role?: boolean
    profile_image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blog?: boolean | admin$blogArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type adminSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    role?: boolean
    profile_image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "email" | "role" | "profile_image" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>
  export type adminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | admin$blogArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {
      blog: Prisma.$blogsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      email: string
      role: $Enums.Role
      profile_image: string | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blog<T extends admin$blogArgs<ExtArgs> = {}>(args?: Subset<T, admin$blogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'Int'>
    readonly fullname: FieldRef<"admin", 'String'>
    readonly email: FieldRef<"admin", 'String'>
    readonly role: FieldRef<"admin", 'Role'>
    readonly profile_image: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
    readonly createdAt: FieldRef<"admin", 'DateTime'>
    readonly updatedAt: FieldRef<"admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin.blog
   */
  export type admin$blogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    where?: blogsWhereInput
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    cursor?: blogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
  }


  /**
   * Model project_manager
   */

  export type AggregateProject_manager = {
    _count: Project_managerCountAggregateOutputType | null
    _avg: Project_managerAvgAggregateOutputType | null
    _sum: Project_managerSumAggregateOutputType | null
    _min: Project_managerMinAggregateOutputType | null
    _max: Project_managerMaxAggregateOutputType | null
  }

  export type Project_managerAvgAggregateOutputType = {
    id: number | null
  }

  export type Project_managerSumAggregateOutputType = {
    id: number | null
  }

  export type Project_managerMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    role: $Enums.Role | null
    profile_image: string | null
    verification_code: string | null
    email_verified: boolean | null
    status: $Enums.Status | null
    password: string | null
    temporal_password: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Project_managerMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    role: $Enums.Role | null
    profile_image: string | null
    verification_code: string | null
    email_verified: boolean | null
    status: $Enums.Status | null
    password: string | null
    temporal_password: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Project_managerCountAggregateOutputType = {
    id: number
    fullname: number
    username: number
    email: number
    phone_number: number
    role: number
    profile_image: number
    verification_code: number
    email_verified: number
    status: number
    password: number
    temporal_password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Project_managerAvgAggregateInputType = {
    id?: true
  }

  export type Project_managerSumAggregateInputType = {
    id?: true
  }

  export type Project_managerMinAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    profile_image?: true
    verification_code?: true
    email_verified?: true
    status?: true
    password?: true
    temporal_password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Project_managerMaxAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    profile_image?: true
    verification_code?: true
    email_verified?: true
    status?: true
    password?: true
    temporal_password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Project_managerCountAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    profile_image?: true
    verification_code?: true
    email_verified?: true
    status?: true
    password?: true
    temporal_password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Project_managerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_manager to aggregate.
     */
    where?: project_managerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_managers to fetch.
     */
    orderBy?: project_managerOrderByWithRelationInput | project_managerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: project_managerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned project_managers
    **/
    _count?: true | Project_managerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Project_managerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Project_managerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Project_managerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Project_managerMaxAggregateInputType
  }

  export type GetProject_managerAggregateType<T extends Project_managerAggregateArgs> = {
        [P in keyof T & keyof AggregateProject_manager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject_manager[P]>
      : GetScalarType<T[P], AggregateProject_manager[P]>
  }




  export type project_managerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_managerWhereInput
    orderBy?: project_managerOrderByWithAggregationInput | project_managerOrderByWithAggregationInput[]
    by: Project_managerScalarFieldEnum[] | Project_managerScalarFieldEnum
    having?: project_managerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Project_managerCountAggregateInputType | true
    _avg?: Project_managerAvgAggregateInputType
    _sum?: Project_managerSumAggregateInputType
    _min?: Project_managerMinAggregateInputType
    _max?: Project_managerMaxAggregateInputType
  }

  export type Project_managerGroupByOutputType = {
    id: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role: $Enums.Role
    profile_image: string | null
    verification_code: string | null
    email_verified: boolean
    status: $Enums.Status
    password: string
    temporal_password: boolean
    createdAt: Date
    updatedAt: Date
    _count: Project_managerCountAggregateOutputType | null
    _avg: Project_managerAvgAggregateOutputType | null
    _sum: Project_managerSumAggregateOutputType | null
    _min: Project_managerMinAggregateOutputType | null
    _max: Project_managerMaxAggregateOutputType | null
  }

  type GetProject_managerGroupByPayload<T extends project_managerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Project_managerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Project_managerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Project_managerGroupByOutputType[P]>
            : GetScalarType<T[P], Project_managerGroupByOutputType[P]>
        }
      >
    >


  export type project_managerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    role?: boolean
    profile_image?: boolean
    verification_code?: boolean
    email_verified?: boolean
    status?: boolean
    password?: boolean
    temporal_password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | project_manager$projectArgs<ExtArgs>
    _count?: boolean | Project_managerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project_manager"]>



  export type project_managerSelectScalar = {
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    role?: boolean
    profile_image?: boolean
    verification_code?: boolean
    email_verified?: boolean
    status?: boolean
    password?: boolean
    temporal_password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type project_managerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "username" | "email" | "phone_number" | "role" | "profile_image" | "verification_code" | "email_verified" | "status" | "password" | "temporal_password" | "createdAt" | "updatedAt", ExtArgs["result"]["project_manager"]>
  export type project_managerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | project_manager$projectArgs<ExtArgs>
    _count?: boolean | Project_managerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $project_managerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project_manager"
    objects: {
      project: Prisma.$projectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      username: string
      email: string
      phone_number: string
      role: $Enums.Role
      profile_image: string | null
      verification_code: string | null
      email_verified: boolean
      status: $Enums.Status
      password: string
      temporal_password: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project_manager"]>
    composites: {}
  }

  type project_managerGetPayload<S extends boolean | null | undefined | project_managerDefaultArgs> = $Result.GetResult<Prisma.$project_managerPayload, S>

  type project_managerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<project_managerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Project_managerCountAggregateInputType | true
    }

  export interface project_managerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project_manager'], meta: { name: 'project_manager' } }
    /**
     * Find zero or one Project_manager that matches the filter.
     * @param {project_managerFindUniqueArgs} args - Arguments to find a Project_manager
     * @example
     * // Get one Project_manager
     * const project_manager = await prisma.project_manager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends project_managerFindUniqueArgs>(args: SelectSubset<T, project_managerFindUniqueArgs<ExtArgs>>): Prisma__project_managerClient<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project_manager that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {project_managerFindUniqueOrThrowArgs} args - Arguments to find a Project_manager
     * @example
     * // Get one Project_manager
     * const project_manager = await prisma.project_manager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends project_managerFindUniqueOrThrowArgs>(args: SelectSubset<T, project_managerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__project_managerClient<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_manager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_managerFindFirstArgs} args - Arguments to find a Project_manager
     * @example
     * // Get one Project_manager
     * const project_manager = await prisma.project_manager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends project_managerFindFirstArgs>(args?: SelectSubset<T, project_managerFindFirstArgs<ExtArgs>>): Prisma__project_managerClient<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_manager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_managerFindFirstOrThrowArgs} args - Arguments to find a Project_manager
     * @example
     * // Get one Project_manager
     * const project_manager = await prisma.project_manager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends project_managerFindFirstOrThrowArgs>(args?: SelectSubset<T, project_managerFindFirstOrThrowArgs<ExtArgs>>): Prisma__project_managerClient<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Project_managers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_managerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Project_managers
     * const project_managers = await prisma.project_manager.findMany()
     * 
     * // Get first 10 Project_managers
     * const project_managers = await prisma.project_manager.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const project_managerWithIdOnly = await prisma.project_manager.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends project_managerFindManyArgs>(args?: SelectSubset<T, project_managerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project_manager.
     * @param {project_managerCreateArgs} args - Arguments to create a Project_manager.
     * @example
     * // Create one Project_manager
     * const Project_manager = await prisma.project_manager.create({
     *   data: {
     *     // ... data to create a Project_manager
     *   }
     * })
     * 
     */
    create<T extends project_managerCreateArgs>(args: SelectSubset<T, project_managerCreateArgs<ExtArgs>>): Prisma__project_managerClient<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Project_managers.
     * @param {project_managerCreateManyArgs} args - Arguments to create many Project_managers.
     * @example
     * // Create many Project_managers
     * const project_manager = await prisma.project_manager.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends project_managerCreateManyArgs>(args?: SelectSubset<T, project_managerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project_manager.
     * @param {project_managerDeleteArgs} args - Arguments to delete one Project_manager.
     * @example
     * // Delete one Project_manager
     * const Project_manager = await prisma.project_manager.delete({
     *   where: {
     *     // ... filter to delete one Project_manager
     *   }
     * })
     * 
     */
    delete<T extends project_managerDeleteArgs>(args: SelectSubset<T, project_managerDeleteArgs<ExtArgs>>): Prisma__project_managerClient<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project_manager.
     * @param {project_managerUpdateArgs} args - Arguments to update one Project_manager.
     * @example
     * // Update one Project_manager
     * const project_manager = await prisma.project_manager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends project_managerUpdateArgs>(args: SelectSubset<T, project_managerUpdateArgs<ExtArgs>>): Prisma__project_managerClient<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Project_managers.
     * @param {project_managerDeleteManyArgs} args - Arguments to filter Project_managers to delete.
     * @example
     * // Delete a few Project_managers
     * const { count } = await prisma.project_manager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends project_managerDeleteManyArgs>(args?: SelectSubset<T, project_managerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_managerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Project_managers
     * const project_manager = await prisma.project_manager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends project_managerUpdateManyArgs>(args: SelectSubset<T, project_managerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project_manager.
     * @param {project_managerUpsertArgs} args - Arguments to update or create a Project_manager.
     * @example
     * // Update or create a Project_manager
     * const project_manager = await prisma.project_manager.upsert({
     *   create: {
     *     // ... data to create a Project_manager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project_manager we want to update
     *   }
     * })
     */
    upsert<T extends project_managerUpsertArgs>(args: SelectSubset<T, project_managerUpsertArgs<ExtArgs>>): Prisma__project_managerClient<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Project_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_managerCountArgs} args - Arguments to filter Project_managers to count.
     * @example
     * // Count the number of Project_managers
     * const count = await prisma.project_manager.count({
     *   where: {
     *     // ... the filter for the Project_managers we want to count
     *   }
     * })
    **/
    count<T extends project_managerCountArgs>(
      args?: Subset<T, project_managerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Project_managerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_managerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Project_managerAggregateArgs>(args: Subset<T, Project_managerAggregateArgs>): Prisma.PrismaPromise<GetProject_managerAggregateType<T>>

    /**
     * Group by Project_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_managerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends project_managerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: project_managerGroupByArgs['orderBy'] }
        : { orderBy?: project_managerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, project_managerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProject_managerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project_manager model
   */
  readonly fields: project_managerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project_manager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__project_managerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends project_manager$projectArgs<ExtArgs> = {}>(args?: Subset<T, project_manager$projectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project_manager model
   */
  interface project_managerFieldRefs {
    readonly id: FieldRef<"project_manager", 'Int'>
    readonly fullname: FieldRef<"project_manager", 'String'>
    readonly username: FieldRef<"project_manager", 'String'>
    readonly email: FieldRef<"project_manager", 'String'>
    readonly phone_number: FieldRef<"project_manager", 'String'>
    readonly role: FieldRef<"project_manager", 'Role'>
    readonly profile_image: FieldRef<"project_manager", 'String'>
    readonly verification_code: FieldRef<"project_manager", 'String'>
    readonly email_verified: FieldRef<"project_manager", 'Boolean'>
    readonly status: FieldRef<"project_manager", 'Status'>
    readonly password: FieldRef<"project_manager", 'String'>
    readonly temporal_password: FieldRef<"project_manager", 'Boolean'>
    readonly createdAt: FieldRef<"project_manager", 'DateTime'>
    readonly updatedAt: FieldRef<"project_manager", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * project_manager findUnique
   */
  export type project_managerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
    /**
     * Filter, which project_manager to fetch.
     */
    where: project_managerWhereUniqueInput
  }

  /**
   * project_manager findUniqueOrThrow
   */
  export type project_managerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
    /**
     * Filter, which project_manager to fetch.
     */
    where: project_managerWhereUniqueInput
  }

  /**
   * project_manager findFirst
   */
  export type project_managerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
    /**
     * Filter, which project_manager to fetch.
     */
    where?: project_managerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_managers to fetch.
     */
    orderBy?: project_managerOrderByWithRelationInput | project_managerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_managers.
     */
    cursor?: project_managerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_managers.
     */
    distinct?: Project_managerScalarFieldEnum | Project_managerScalarFieldEnum[]
  }

  /**
   * project_manager findFirstOrThrow
   */
  export type project_managerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
    /**
     * Filter, which project_manager to fetch.
     */
    where?: project_managerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_managers to fetch.
     */
    orderBy?: project_managerOrderByWithRelationInput | project_managerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_managers.
     */
    cursor?: project_managerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_managers.
     */
    distinct?: Project_managerScalarFieldEnum | Project_managerScalarFieldEnum[]
  }

  /**
   * project_manager findMany
   */
  export type project_managerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
    /**
     * Filter, which project_managers to fetch.
     */
    where?: project_managerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_managers to fetch.
     */
    orderBy?: project_managerOrderByWithRelationInput | project_managerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing project_managers.
     */
    cursor?: project_managerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_managers.
     */
    skip?: number
    distinct?: Project_managerScalarFieldEnum | Project_managerScalarFieldEnum[]
  }

  /**
   * project_manager create
   */
  export type project_managerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
    /**
     * The data needed to create a project_manager.
     */
    data: XOR<project_managerCreateInput, project_managerUncheckedCreateInput>
  }

  /**
   * project_manager createMany
   */
  export type project_managerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many project_managers.
     */
    data: project_managerCreateManyInput | project_managerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project_manager update
   */
  export type project_managerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
    /**
     * The data needed to update a project_manager.
     */
    data: XOR<project_managerUpdateInput, project_managerUncheckedUpdateInput>
    /**
     * Choose, which project_manager to update.
     */
    where: project_managerWhereUniqueInput
  }

  /**
   * project_manager updateMany
   */
  export type project_managerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update project_managers.
     */
    data: XOR<project_managerUpdateManyMutationInput, project_managerUncheckedUpdateManyInput>
    /**
     * Filter which project_managers to update
     */
    where?: project_managerWhereInput
    /**
     * Limit how many project_managers to update.
     */
    limit?: number
  }

  /**
   * project_manager upsert
   */
  export type project_managerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
    /**
     * The filter to search for the project_manager to update in case it exists.
     */
    where: project_managerWhereUniqueInput
    /**
     * In case the project_manager found by the `where` argument doesn't exist, create a new project_manager with this data.
     */
    create: XOR<project_managerCreateInput, project_managerUncheckedCreateInput>
    /**
     * In case the project_manager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<project_managerUpdateInput, project_managerUncheckedUpdateInput>
  }

  /**
   * project_manager delete
   */
  export type project_managerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
    /**
     * Filter which project_manager to delete.
     */
    where: project_managerWhereUniqueInput
  }

  /**
   * project_manager deleteMany
   */
  export type project_managerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_managers to delete
     */
    where?: project_managerWhereInput
    /**
     * Limit how many project_managers to delete.
     */
    limit?: number
  }

  /**
   * project_manager.project
   */
  export type project_manager$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    where?: projectWhereInput
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    cursor?: projectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project_manager without action
   */
  export type project_managerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
  }


  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    project_manager_id: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    project_manager_id: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    project_name: string | null
    project_manager_id: number | null
    task: string | null
    start_date: Date | null
    end_date: Date | null
    description: string | null
    target_entry: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    project_name: string | null
    project_manager_id: number | null
    task: string | null
    start_date: Date | null
    end_date: Date | null
    description: string | null
    target_entry: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    project_name: number
    project_manager_id: number
    task: number
    start_date: number
    end_date: number
    description: number
    target_entry: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    project_manager_id?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    project_manager_id?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    project_name?: true
    project_manager_id?: true
    task?: true
    start_date?: true
    end_date?: true
    description?: true
    target_entry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    project_name?: true
    project_manager_id?: true
    task?: true
    start_date?: true
    end_date?: true
    description?: true
    target_entry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    project_name?: true
    project_manager_id?: true
    task?: true
    start_date?: true
    end_date?: true
    description?: true
    target_entry?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    project_name: string
    project_manager_id: number
    task: string | null
    start_date: Date
    end_date: Date
    description: string
    target_entry: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_name?: boolean
    project_manager_id?: boolean
    task?: boolean
    start_date?: boolean
    end_date?: boolean
    description?: boolean
    target_entry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project_manager?: boolean | project_managerDefaultArgs<ExtArgs>
    data_entry?: boolean | project$data_entryArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type projectSelectScalar = {
    id?: boolean
    project_name?: boolean
    project_manager_id?: boolean
    task?: boolean
    start_date?: boolean
    end_date?: boolean
    description?: boolean
    target_entry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type projectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "project_name" | "project_manager_id" | "task" | "start_date" | "end_date" | "description" | "target_entry" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project_manager?: boolean | project_managerDefaultArgs<ExtArgs>
    data_entry?: boolean | project$data_entryArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project"
    objects: {
      project_manager: Prisma.$project_managerPayload<ExtArgs>
      data_entry: Prisma.$data_entryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_name: string
      project_manager_id: number
      task: string | null
      start_date: Date
      end_date: Date
      description: string
      target_entry: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<Prisma.$projectPayload, S>

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project'], meta: { name: 'project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectFindUniqueArgs>(args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs>(args: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectFindFirstArgs>(args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs>(args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectFindManyArgs>(args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends projectCreateArgs>(args: SelectSubset<T, projectCreateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectCreateManyArgs>(args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends projectDeleteArgs>(args: SelectSubset<T, projectDeleteArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectUpdateArgs>(args: SelectSubset<T, projectUpdateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectDeleteManyArgs>(args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectUpdateManyArgs>(args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends projectUpsertArgs>(args: SelectSubset<T, projectUpsertArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project model
   */
  readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project_manager<T extends project_managerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, project_managerDefaultArgs<ExtArgs>>): Prisma__project_managerClient<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    data_entry<T extends project$data_entryArgs<ExtArgs> = {}>(args?: Subset<T, project$data_entryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project model
   */
  interface projectFieldRefs {
    readonly id: FieldRef<"project", 'Int'>
    readonly project_name: FieldRef<"project", 'String'>
    readonly project_manager_id: FieldRef<"project", 'Int'>
    readonly task: FieldRef<"project", 'String'>
    readonly start_date: FieldRef<"project", 'DateTime'>
    readonly end_date: FieldRef<"project", 'DateTime'>
    readonly description: FieldRef<"project", 'String'>
    readonly target_entry: FieldRef<"project", 'String'>
    readonly createdAt: FieldRef<"project", 'DateTime'>
    readonly updatedAt: FieldRef<"project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>
  }

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>
  }

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * project.data_entry
   */
  export type project$data_entryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    where?: data_entryWhereInput
    orderBy?: data_entryOrderByWithRelationInput | data_entryOrderByWithRelationInput[]
    cursor?: data_entryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Data_entryScalarFieldEnum | Data_entryScalarFieldEnum[]
  }

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
  }


  /**
   * Model data_entry
   */

  export type AggregateData_entry = {
    _count: Data_entryCountAggregateOutputType | null
    _avg: Data_entryAvgAggregateOutputType | null
    _sum: Data_entrySumAggregateOutputType | null
    _min: Data_entryMinAggregateOutputType | null
    _max: Data_entryMaxAggregateOutputType | null
  }

  export type Data_entryAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Data_entrySumAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Data_entryMinAggregateOutputType = {
    id: number | null
    project_id: number | null
    date: Date | null
    location: string | null
    description: string | null
    image_url: string | null
    video_url: string | null
    document_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Data_entryMaxAggregateOutputType = {
    id: number | null
    project_id: number | null
    date: Date | null
    location: string | null
    description: string | null
    image_url: string | null
    video_url: string | null
    document_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Data_entryCountAggregateOutputType = {
    id: number
    project_id: number
    date: number
    location: number
    description: number
    image_url: number
    video_url: number
    document_url: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Data_entryAvgAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Data_entrySumAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Data_entryMinAggregateInputType = {
    id?: true
    project_id?: true
    date?: true
    location?: true
    description?: true
    image_url?: true
    video_url?: true
    document_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Data_entryMaxAggregateInputType = {
    id?: true
    project_id?: true
    date?: true
    location?: true
    description?: true
    image_url?: true
    video_url?: true
    document_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Data_entryCountAggregateInputType = {
    id?: true
    project_id?: true
    date?: true
    location?: true
    description?: true
    image_url?: true
    video_url?: true
    document_url?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Data_entryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which data_entry to aggregate.
     */
    where?: data_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data_entries to fetch.
     */
    orderBy?: data_entryOrderByWithRelationInput | data_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: data_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned data_entries
    **/
    _count?: true | Data_entryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Data_entryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Data_entrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Data_entryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Data_entryMaxAggregateInputType
  }

  export type GetData_entryAggregateType<T extends Data_entryAggregateArgs> = {
        [P in keyof T & keyof AggregateData_entry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateData_entry[P]>
      : GetScalarType<T[P], AggregateData_entry[P]>
  }




  export type data_entryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: data_entryWhereInput
    orderBy?: data_entryOrderByWithAggregationInput | data_entryOrderByWithAggregationInput[]
    by: Data_entryScalarFieldEnum[] | Data_entryScalarFieldEnum
    having?: data_entryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Data_entryCountAggregateInputType | true
    _avg?: Data_entryAvgAggregateInputType
    _sum?: Data_entrySumAggregateInputType
    _min?: Data_entryMinAggregateInputType
    _max?: Data_entryMaxAggregateInputType
  }

  export type Data_entryGroupByOutputType = {
    id: number
    project_id: number
    date: Date
    location: string
    description: string
    image_url: string | null
    video_url: string | null
    document_url: string | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: Data_entryCountAggregateOutputType | null
    _avg: Data_entryAvgAggregateOutputType | null
    _sum: Data_entrySumAggregateOutputType | null
    _min: Data_entryMinAggregateOutputType | null
    _max: Data_entryMaxAggregateOutputType | null
  }

  type GetData_entryGroupByPayload<T extends data_entryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Data_entryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Data_entryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Data_entryGroupByOutputType[P]>
            : GetScalarType<T[P], Data_entryGroupByOutputType[P]>
        }
      >
    >


  export type data_entrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    date?: boolean
    location?: boolean
    description?: boolean
    image_url?: boolean
    video_url?: boolean
    document_url?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["data_entry"]>



  export type data_entrySelectScalar = {
    id?: boolean
    project_id?: boolean
    date?: boolean
    location?: boolean
    description?: boolean
    image_url?: boolean
    video_url?: boolean
    document_url?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type data_entryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "project_id" | "date" | "location" | "description" | "image_url" | "video_url" | "document_url" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["data_entry"]>
  export type data_entryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
  }

  export type $data_entryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "data_entry"
    objects: {
      project: Prisma.$projectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_id: number
      date: Date
      location: string
      description: string
      image_url: string | null
      video_url: string | null
      document_url: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["data_entry"]>
    composites: {}
  }

  type data_entryGetPayload<S extends boolean | null | undefined | data_entryDefaultArgs> = $Result.GetResult<Prisma.$data_entryPayload, S>

  type data_entryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<data_entryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Data_entryCountAggregateInputType | true
    }

  export interface data_entryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['data_entry'], meta: { name: 'data_entry' } }
    /**
     * Find zero or one Data_entry that matches the filter.
     * @param {data_entryFindUniqueArgs} args - Arguments to find a Data_entry
     * @example
     * // Get one Data_entry
     * const data_entry = await prisma.data_entry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends data_entryFindUniqueArgs>(args: SelectSubset<T, data_entryFindUniqueArgs<ExtArgs>>): Prisma__data_entryClient<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Data_entry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {data_entryFindUniqueOrThrowArgs} args - Arguments to find a Data_entry
     * @example
     * // Get one Data_entry
     * const data_entry = await prisma.data_entry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends data_entryFindUniqueOrThrowArgs>(args: SelectSubset<T, data_entryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__data_entryClient<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Data_entry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_entryFindFirstArgs} args - Arguments to find a Data_entry
     * @example
     * // Get one Data_entry
     * const data_entry = await prisma.data_entry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends data_entryFindFirstArgs>(args?: SelectSubset<T, data_entryFindFirstArgs<ExtArgs>>): Prisma__data_entryClient<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Data_entry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_entryFindFirstOrThrowArgs} args - Arguments to find a Data_entry
     * @example
     * // Get one Data_entry
     * const data_entry = await prisma.data_entry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends data_entryFindFirstOrThrowArgs>(args?: SelectSubset<T, data_entryFindFirstOrThrowArgs<ExtArgs>>): Prisma__data_entryClient<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Data_entries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_entryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Data_entries
     * const data_entries = await prisma.data_entry.findMany()
     * 
     * // Get first 10 Data_entries
     * const data_entries = await prisma.data_entry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const data_entryWithIdOnly = await prisma.data_entry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends data_entryFindManyArgs>(args?: SelectSubset<T, data_entryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Data_entry.
     * @param {data_entryCreateArgs} args - Arguments to create a Data_entry.
     * @example
     * // Create one Data_entry
     * const Data_entry = await prisma.data_entry.create({
     *   data: {
     *     // ... data to create a Data_entry
     *   }
     * })
     * 
     */
    create<T extends data_entryCreateArgs>(args: SelectSubset<T, data_entryCreateArgs<ExtArgs>>): Prisma__data_entryClient<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Data_entries.
     * @param {data_entryCreateManyArgs} args - Arguments to create many Data_entries.
     * @example
     * // Create many Data_entries
     * const data_entry = await prisma.data_entry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends data_entryCreateManyArgs>(args?: SelectSubset<T, data_entryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Data_entry.
     * @param {data_entryDeleteArgs} args - Arguments to delete one Data_entry.
     * @example
     * // Delete one Data_entry
     * const Data_entry = await prisma.data_entry.delete({
     *   where: {
     *     // ... filter to delete one Data_entry
     *   }
     * })
     * 
     */
    delete<T extends data_entryDeleteArgs>(args: SelectSubset<T, data_entryDeleteArgs<ExtArgs>>): Prisma__data_entryClient<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Data_entry.
     * @param {data_entryUpdateArgs} args - Arguments to update one Data_entry.
     * @example
     * // Update one Data_entry
     * const data_entry = await prisma.data_entry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends data_entryUpdateArgs>(args: SelectSubset<T, data_entryUpdateArgs<ExtArgs>>): Prisma__data_entryClient<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Data_entries.
     * @param {data_entryDeleteManyArgs} args - Arguments to filter Data_entries to delete.
     * @example
     * // Delete a few Data_entries
     * const { count } = await prisma.data_entry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends data_entryDeleteManyArgs>(args?: SelectSubset<T, data_entryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Data_entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_entryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Data_entries
     * const data_entry = await prisma.data_entry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends data_entryUpdateManyArgs>(args: SelectSubset<T, data_entryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Data_entry.
     * @param {data_entryUpsertArgs} args - Arguments to update or create a Data_entry.
     * @example
     * // Update or create a Data_entry
     * const data_entry = await prisma.data_entry.upsert({
     *   create: {
     *     // ... data to create a Data_entry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Data_entry we want to update
     *   }
     * })
     */
    upsert<T extends data_entryUpsertArgs>(args: SelectSubset<T, data_entryUpsertArgs<ExtArgs>>): Prisma__data_entryClient<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Data_entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_entryCountArgs} args - Arguments to filter Data_entries to count.
     * @example
     * // Count the number of Data_entries
     * const count = await prisma.data_entry.count({
     *   where: {
     *     // ... the filter for the Data_entries we want to count
     *   }
     * })
    **/
    count<T extends data_entryCountArgs>(
      args?: Subset<T, data_entryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Data_entryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Data_entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Data_entryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Data_entryAggregateArgs>(args: Subset<T, Data_entryAggregateArgs>): Prisma.PrismaPromise<GetData_entryAggregateType<T>>

    /**
     * Group by Data_entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_entryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends data_entryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: data_entryGroupByArgs['orderBy'] }
        : { orderBy?: data_entryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, data_entryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetData_entryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the data_entry model
   */
  readonly fields: data_entryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for data_entry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__data_entryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the data_entry model
   */
  interface data_entryFieldRefs {
    readonly id: FieldRef<"data_entry", 'Int'>
    readonly project_id: FieldRef<"data_entry", 'Int'>
    readonly date: FieldRef<"data_entry", 'DateTime'>
    readonly location: FieldRef<"data_entry", 'String'>
    readonly description: FieldRef<"data_entry", 'String'>
    readonly image_url: FieldRef<"data_entry", 'String'>
    readonly video_url: FieldRef<"data_entry", 'String'>
    readonly document_url: FieldRef<"data_entry", 'String'>
    readonly metadata: FieldRef<"data_entry", 'Json'>
    readonly createdAt: FieldRef<"data_entry", 'DateTime'>
    readonly updatedAt: FieldRef<"data_entry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * data_entry findUnique
   */
  export type data_entryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    /**
     * Filter, which data_entry to fetch.
     */
    where: data_entryWhereUniqueInput
  }

  /**
   * data_entry findUniqueOrThrow
   */
  export type data_entryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    /**
     * Filter, which data_entry to fetch.
     */
    where: data_entryWhereUniqueInput
  }

  /**
   * data_entry findFirst
   */
  export type data_entryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    /**
     * Filter, which data_entry to fetch.
     */
    where?: data_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data_entries to fetch.
     */
    orderBy?: data_entryOrderByWithRelationInput | data_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for data_entries.
     */
    cursor?: data_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of data_entries.
     */
    distinct?: Data_entryScalarFieldEnum | Data_entryScalarFieldEnum[]
  }

  /**
   * data_entry findFirstOrThrow
   */
  export type data_entryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    /**
     * Filter, which data_entry to fetch.
     */
    where?: data_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data_entries to fetch.
     */
    orderBy?: data_entryOrderByWithRelationInput | data_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for data_entries.
     */
    cursor?: data_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of data_entries.
     */
    distinct?: Data_entryScalarFieldEnum | Data_entryScalarFieldEnum[]
  }

  /**
   * data_entry findMany
   */
  export type data_entryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    /**
     * Filter, which data_entries to fetch.
     */
    where?: data_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data_entries to fetch.
     */
    orderBy?: data_entryOrderByWithRelationInput | data_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing data_entries.
     */
    cursor?: data_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data_entries.
     */
    skip?: number
    distinct?: Data_entryScalarFieldEnum | Data_entryScalarFieldEnum[]
  }

  /**
   * data_entry create
   */
  export type data_entryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    /**
     * The data needed to create a data_entry.
     */
    data: XOR<data_entryCreateInput, data_entryUncheckedCreateInput>
  }

  /**
   * data_entry createMany
   */
  export type data_entryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many data_entries.
     */
    data: data_entryCreateManyInput | data_entryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * data_entry update
   */
  export type data_entryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    /**
     * The data needed to update a data_entry.
     */
    data: XOR<data_entryUpdateInput, data_entryUncheckedUpdateInput>
    /**
     * Choose, which data_entry to update.
     */
    where: data_entryWhereUniqueInput
  }

  /**
   * data_entry updateMany
   */
  export type data_entryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update data_entries.
     */
    data: XOR<data_entryUpdateManyMutationInput, data_entryUncheckedUpdateManyInput>
    /**
     * Filter which data_entries to update
     */
    where?: data_entryWhereInput
    /**
     * Limit how many data_entries to update.
     */
    limit?: number
  }

  /**
   * data_entry upsert
   */
  export type data_entryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    /**
     * The filter to search for the data_entry to update in case it exists.
     */
    where: data_entryWhereUniqueInput
    /**
     * In case the data_entry found by the `where` argument doesn't exist, create a new data_entry with this data.
     */
    create: XOR<data_entryCreateInput, data_entryUncheckedCreateInput>
    /**
     * In case the data_entry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<data_entryUpdateInput, data_entryUncheckedUpdateInput>
  }

  /**
   * data_entry delete
   */
  export type data_entryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    /**
     * Filter which data_entry to delete.
     */
    where: data_entryWhereUniqueInput
  }

  /**
   * data_entry deleteMany
   */
  export type data_entryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which data_entries to delete
     */
    where?: data_entryWhereInput
    /**
     * Limit how many data_entries to delete.
     */
    limit?: number
  }

  /**
   * data_entry without action
   */
  export type data_entryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
  }


  /**
   * Model blogs
   */

  export type AggregateBlogs = {
    _count: BlogsCountAggregateOutputType | null
    _avg: BlogsAvgAggregateOutputType | null
    _sum: BlogsSumAggregateOutputType | null
    _min: BlogsMinAggregateOutputType | null
    _max: BlogsMaxAggregateOutputType | null
  }

  export type BlogsAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    category_id: number | null
    tag_id: number | null
  }

  export type BlogsSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    category_id: number | null
    tag_id: number | null
  }

  export type BlogsMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    published: boolean | null
    authorId: number | null
    cover_image: string | null
    category_id: number | null
    tag_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    slug: string | null
  }

  export type BlogsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    published: boolean | null
    authorId: number | null
    cover_image: string | null
    category_id: number | null
    tag_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    slug: string | null
  }

  export type BlogsCountAggregateOutputType = {
    id: number
    title: number
    content: number
    published: number
    authorId: number
    cover_image: number
    category_id: number
    tag_id: number
    createdAt: number
    updatedAt: number
    slug: number
    _all: number
  }


  export type BlogsAvgAggregateInputType = {
    id?: true
    authorId?: true
    category_id?: true
    tag_id?: true
  }

  export type BlogsSumAggregateInputType = {
    id?: true
    authorId?: true
    category_id?: true
    tag_id?: true
  }

  export type BlogsMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
    cover_image?: true
    category_id?: true
    tag_id?: true
    createdAt?: true
    updatedAt?: true
    slug?: true
  }

  export type BlogsMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
    cover_image?: true
    category_id?: true
    tag_id?: true
    createdAt?: true
    updatedAt?: true
    slug?: true
  }

  export type BlogsCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
    cover_image?: true
    category_id?: true
    tag_id?: true
    createdAt?: true
    updatedAt?: true
    slug?: true
    _all?: true
  }

  export type BlogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blogs to aggregate.
     */
    where?: blogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blogs
    **/
    _count?: true | BlogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogsMaxAggregateInputType
  }

  export type GetBlogsAggregateType<T extends BlogsAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogs[P]>
      : GetScalarType<T[P], AggregateBlogs[P]>
  }




  export type blogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blogsWhereInput
    orderBy?: blogsOrderByWithAggregationInput | blogsOrderByWithAggregationInput[]
    by: BlogsScalarFieldEnum[] | BlogsScalarFieldEnum
    having?: blogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogsCountAggregateInputType | true
    _avg?: BlogsAvgAggregateInputType
    _sum?: BlogsSumAggregateInputType
    _min?: BlogsMinAggregateInputType
    _max?: BlogsMaxAggregateInputType
  }

  export type BlogsGroupByOutputType = {
    id: number
    title: string
    content: string
    published: boolean
    authorId: number
    cover_image: string | null
    category_id: number
    tag_id: number
    createdAt: Date
    updatedAt: Date
    slug: string
    _count: BlogsCountAggregateOutputType | null
    _avg: BlogsAvgAggregateOutputType | null
    _sum: BlogsSumAggregateOutputType | null
    _min: BlogsMinAggregateOutputType | null
    _max: BlogsMaxAggregateOutputType | null
  }

  type GetBlogsGroupByPayload<T extends blogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogsGroupByOutputType[P]>
            : GetScalarType<T[P], BlogsGroupByOutputType[P]>
        }
      >
    >


  export type blogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    cover_image?: boolean
    category_id?: boolean
    tag_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slug?: boolean
    author?: boolean | adminDefaultArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
    tags?: boolean | tagDefaultArgs<ExtArgs>
    comments?: boolean | blogs$commentsArgs<ExtArgs>
    _count?: boolean | BlogsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogs"]>



  export type blogsSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    cover_image?: boolean
    category_id?: boolean
    tag_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slug?: boolean
  }

  export type blogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "published" | "authorId" | "cover_image" | "category_id" | "tag_id" | "createdAt" | "updatedAt" | "slug", ExtArgs["result"]["blogs"]>
  export type blogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | adminDefaultArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
    tags?: boolean | tagDefaultArgs<ExtArgs>
    comments?: boolean | blogs$commentsArgs<ExtArgs>
    _count?: boolean | BlogsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $blogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blogs"
    objects: {
      author: Prisma.$adminPayload<ExtArgs>
      category: Prisma.$categoryPayload<ExtArgs>
      tags: Prisma.$tagPayload<ExtArgs>
      comments: Prisma.$commentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      published: boolean
      authorId: number
      cover_image: string | null
      category_id: number
      tag_id: number
      createdAt: Date
      updatedAt: Date
      slug: string
    }, ExtArgs["result"]["blogs"]>
    composites: {}
  }

  type blogsGetPayload<S extends boolean | null | undefined | blogsDefaultArgs> = $Result.GetResult<Prisma.$blogsPayload, S>

  type blogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<blogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogsCountAggregateInputType | true
    }

  export interface blogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blogs'], meta: { name: 'blogs' } }
    /**
     * Find zero or one Blogs that matches the filter.
     * @param {blogsFindUniqueArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blogsFindUniqueArgs>(args: SelectSubset<T, blogsFindUniqueArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {blogsFindUniqueOrThrowArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blogsFindUniqueOrThrowArgs>(args: SelectSubset<T, blogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsFindFirstArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blogsFindFirstArgs>(args?: SelectSubset<T, blogsFindFirstArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsFindFirstOrThrowArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blogsFindFirstOrThrowArgs>(args?: SelectSubset<T, blogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blogs.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogsWithIdOnly = await prisma.blogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends blogsFindManyArgs>(args?: SelectSubset<T, blogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blogs.
     * @param {blogsCreateArgs} args - Arguments to create a Blogs.
     * @example
     * // Create one Blogs
     * const Blogs = await prisma.blogs.create({
     *   data: {
     *     // ... data to create a Blogs
     *   }
     * })
     * 
     */
    create<T extends blogsCreateArgs>(args: SelectSubset<T, blogsCreateArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {blogsCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blogs = await prisma.blogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blogsCreateManyArgs>(args?: SelectSubset<T, blogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blogs.
     * @param {blogsDeleteArgs} args - Arguments to delete one Blogs.
     * @example
     * // Delete one Blogs
     * const Blogs = await prisma.blogs.delete({
     *   where: {
     *     // ... filter to delete one Blogs
     *   }
     * })
     * 
     */
    delete<T extends blogsDeleteArgs>(args: SelectSubset<T, blogsDeleteArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blogs.
     * @param {blogsUpdateArgs} args - Arguments to update one Blogs.
     * @example
     * // Update one Blogs
     * const blogs = await prisma.blogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blogsUpdateArgs>(args: SelectSubset<T, blogsUpdateArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {blogsDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blogsDeleteManyArgs>(args?: SelectSubset<T, blogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blogs = await prisma.blogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blogsUpdateManyArgs>(args: SelectSubset<T, blogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blogs.
     * @param {blogsUpsertArgs} args - Arguments to update or create a Blogs.
     * @example
     * // Update or create a Blogs
     * const blogs = await prisma.blogs.upsert({
     *   create: {
     *     // ... data to create a Blogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blogs we want to update
     *   }
     * })
     */
    upsert<T extends blogsUpsertArgs>(args: SelectSubset<T, blogsUpsertArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blogs.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends blogsCountArgs>(
      args?: Subset<T, blogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogsAggregateArgs>(args: Subset<T, BlogsAggregateArgs>): Prisma.PrismaPromise<GetBlogsAggregateType<T>>

    /**
     * Group by Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends blogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blogsGroupByArgs['orderBy'] }
        : { orderBy?: blogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, blogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blogs model
   */
  readonly fields: blogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends adminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, adminDefaultArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryDefaultArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends tagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagDefaultArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends blogs$commentsArgs<ExtArgs> = {}>(args?: Subset<T, blogs$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the blogs model
   */
  interface blogsFieldRefs {
    readonly id: FieldRef<"blogs", 'Int'>
    readonly title: FieldRef<"blogs", 'String'>
    readonly content: FieldRef<"blogs", 'String'>
    readonly published: FieldRef<"blogs", 'Boolean'>
    readonly authorId: FieldRef<"blogs", 'Int'>
    readonly cover_image: FieldRef<"blogs", 'String'>
    readonly category_id: FieldRef<"blogs", 'Int'>
    readonly tag_id: FieldRef<"blogs", 'Int'>
    readonly createdAt: FieldRef<"blogs", 'DateTime'>
    readonly updatedAt: FieldRef<"blogs", 'DateTime'>
    readonly slug: FieldRef<"blogs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * blogs findUnique
   */
  export type blogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where: blogsWhereUniqueInput
  }

  /**
   * blogs findUniqueOrThrow
   */
  export type blogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where: blogsWhereUniqueInput
  }

  /**
   * blogs findFirst
   */
  export type blogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where?: blogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blogs.
     */
    cursor?: blogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blogs.
     */
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * blogs findFirstOrThrow
   */
  export type blogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where?: blogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blogs.
     */
    cursor?: blogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blogs.
     */
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * blogs findMany
   */
  export type blogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where?: blogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blogs.
     */
    cursor?: blogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * blogs create
   */
  export type blogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * The data needed to create a blogs.
     */
    data: XOR<blogsCreateInput, blogsUncheckedCreateInput>
  }

  /**
   * blogs createMany
   */
  export type blogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blogs.
     */
    data: blogsCreateManyInput | blogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blogs update
   */
  export type blogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * The data needed to update a blogs.
     */
    data: XOR<blogsUpdateInput, blogsUncheckedUpdateInput>
    /**
     * Choose, which blogs to update.
     */
    where: blogsWhereUniqueInput
  }

  /**
   * blogs updateMany
   */
  export type blogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blogs.
     */
    data: XOR<blogsUpdateManyMutationInput, blogsUncheckedUpdateManyInput>
    /**
     * Filter which blogs to update
     */
    where?: blogsWhereInput
    /**
     * Limit how many blogs to update.
     */
    limit?: number
  }

  /**
   * blogs upsert
   */
  export type blogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * The filter to search for the blogs to update in case it exists.
     */
    where: blogsWhereUniqueInput
    /**
     * In case the blogs found by the `where` argument doesn't exist, create a new blogs with this data.
     */
    create: XOR<blogsCreateInput, blogsUncheckedCreateInput>
    /**
     * In case the blogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blogsUpdateInput, blogsUncheckedUpdateInput>
  }

  /**
   * blogs delete
   */
  export type blogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * Filter which blogs to delete.
     */
    where: blogsWhereUniqueInput
  }

  /**
   * blogs deleteMany
   */
  export type blogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blogs to delete
     */
    where?: blogsWhereInput
    /**
     * Limit how many blogs to delete.
     */
    limit?: number
  }

  /**
   * blogs.comments
   */
  export type blogs$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    where?: commentWhereInput
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    cursor?: commentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * blogs without action
   */
  export type blogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blog?: boolean | category$blogArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type categorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | category$blogArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      blog: Prisma.$blogsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blog<T extends category$blogArgs<ExtArgs> = {}>(args?: Subset<T, category$blogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'Int'>
    readonly name: FieldRef<"category", 'String'>
    readonly createdAt: FieldRef<"category", 'DateTime'>
    readonly updatedAt: FieldRef<"category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.blog
   */
  export type category$blogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    where?: blogsWhereInput
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    cursor?: blogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tag to aggregate.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type tagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagWhereInput
    orderBy?: tagOrderByWithAggregationInput | tagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: tagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends tagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type tagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blog?: boolean | tag$blogArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>



  export type tagSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type tagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["tag"]>
  export type tagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | tag$blogArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tag"
    objects: {
      blog: Prisma.$blogsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type tagGetPayload<S extends boolean | null | undefined | tagDefaultArgs> = $Result.GetResult<Prisma.$tagPayload, S>

  type tagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface tagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tag'], meta: { name: 'tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {tagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagFindUniqueArgs>(args: SelectSubset<T, tagFindUniqueArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagFindUniqueOrThrowArgs>(args: SelectSubset<T, tagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagFindFirstArgs>(args?: SelectSubset<T, tagFindFirstArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagFindFirstOrThrowArgs>(args?: SelectSubset<T, tagFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tagFindManyArgs>(args?: SelectSubset<T, tagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {tagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends tagCreateArgs>(args: SelectSubset<T, tagCreateArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagCreateManyArgs>(args?: SelectSubset<T, tagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {tagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends tagDeleteArgs>(args: SelectSubset<T, tagDeleteArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {tagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagUpdateArgs>(args: SelectSubset<T, tagUpdateArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagDeleteManyArgs>(args?: SelectSubset<T, tagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagUpdateManyArgs>(args: SelectSubset<T, tagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {tagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends tagUpsertArgs>(args: SelectSubset<T, tagUpsertArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagCountArgs>(
      args?: Subset<T, tagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagGroupByArgs['orderBy'] }
        : { orderBy?: tagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tag model
   */
  readonly fields: tagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blog<T extends tag$blogArgs<ExtArgs> = {}>(args?: Subset<T, tag$blogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tag model
   */
  interface tagFieldRefs {
    readonly id: FieldRef<"tag", 'Int'>
    readonly name: FieldRef<"tag", 'String'>
    readonly createdAt: FieldRef<"tag", 'DateTime'>
    readonly updatedAt: FieldRef<"tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tag findUnique
   */
  export type tagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag findUniqueOrThrow
   */
  export type tagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag findFirst
   */
  export type tagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag findFirstOrThrow
   */
  export type tagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag findMany
   */
  export type tagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag create
   */
  export type tagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * The data needed to create a tag.
     */
    data: XOR<tagCreateInput, tagUncheckedCreateInput>
  }

  /**
   * tag createMany
   */
  export type tagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagCreateManyInput | tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tag update
   */
  export type tagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * The data needed to update a tag.
     */
    data: XOR<tagUpdateInput, tagUncheckedUpdateInput>
    /**
     * Choose, which tag to update.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag updateMany
   */
  export type tagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagUpdateManyMutationInput, tagUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tag upsert
   */
  export type tagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * The filter to search for the tag to update in case it exists.
     */
    where: tagWhereUniqueInput
    /**
     * In case the tag found by the `where` argument doesn't exist, create a new tag with this data.
     */
    create: XOR<tagCreateInput, tagUncheckedCreateInput>
    /**
     * In case the tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagUpdateInput, tagUncheckedUpdateInput>
  }

  /**
   * tag delete
   */
  export type tagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter which tag to delete.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag deleteMany
   */
  export type tagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tag.blog
   */
  export type tag$blogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    where?: blogsWhereInput
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    cursor?: blogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * tag without action
   */
  export type tagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
  }


  /**
   * Model comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    blog_id: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    blog_id: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    content: string | null
    blog_id: number | null
    author: string | null
    email: string | null
    approved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    content: string | null
    blog_id: number | null
    author: string | null
    email: string | null
    approved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    blog_id: number
    author: number
    email: number
    approved: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    blog_id?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    blog_id?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    blog_id?: true
    author?: true
    email?: true
    approved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    blog_id?: true
    author?: true
    email?: true
    approved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    blog_id?: true
    author?: true
    email?: true
    approved?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comment to aggregate.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type commentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentWhereInput
    orderBy?: commentOrderByWithAggregationInput | commentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: commentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    content: string
    blog_id: number
    author: string
    email: string
    approved: boolean
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends commentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type commentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    blog_id?: boolean
    author?: boolean
    email?: boolean
    approved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blog?: boolean | blogsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>



  export type commentSelectScalar = {
    id?: boolean
    content?: boolean
    blog_id?: boolean
    author?: boolean
    email?: boolean
    approved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type commentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "blog_id" | "author" | "email" | "approved" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type commentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | blogsDefaultArgs<ExtArgs>
  }

  export type $commentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comment"
    objects: {
      blog: Prisma.$blogsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      blog_id: number
      author: string
      email: string
      approved: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type commentGetPayload<S extends boolean | null | undefined | commentDefaultArgs> = $Result.GetResult<Prisma.$commentPayload, S>

  type commentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface commentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comment'], meta: { name: 'comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {commentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentFindUniqueArgs>(args: SelectSubset<T, commentFindUniqueArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentFindUniqueOrThrowArgs>(args: SelectSubset<T, commentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentFindFirstArgs>(args?: SelectSubset<T, commentFindFirstArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentFindFirstOrThrowArgs>(args?: SelectSubset<T, commentFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commentFindManyArgs>(args?: SelectSubset<T, commentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {commentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends commentCreateArgs>(args: SelectSubset<T, commentCreateArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentCreateManyArgs>(args?: SelectSubset<T, commentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {commentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends commentDeleteArgs>(args: SelectSubset<T, commentDeleteArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {commentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentUpdateArgs>(args: SelectSubset<T, commentUpdateArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentDeleteManyArgs>(args?: SelectSubset<T, commentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentUpdateManyArgs>(args: SelectSubset<T, commentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {commentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends commentUpsertArgs>(args: SelectSubset<T, commentUpsertArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentCountArgs>(
      args?: Subset<T, commentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends commentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentGroupByArgs['orderBy'] }
        : { orderBy?: commentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, commentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comment model
   */
  readonly fields: commentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blog<T extends blogsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, blogsDefaultArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comment model
   */
  interface commentFieldRefs {
    readonly id: FieldRef<"comment", 'Int'>
    readonly content: FieldRef<"comment", 'String'>
    readonly blog_id: FieldRef<"comment", 'Int'>
    readonly author: FieldRef<"comment", 'String'>
    readonly email: FieldRef<"comment", 'String'>
    readonly approved: FieldRef<"comment", 'Boolean'>
    readonly createdAt: FieldRef<"comment", 'DateTime'>
    readonly updatedAt: FieldRef<"comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * comment findUnique
   */
  export type commentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment findUniqueOrThrow
   */
  export type commentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment findFirst
   */
  export type commentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * comment findFirstOrThrow
   */
  export type commentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * comment findMany
   */
  export type commentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * comment create
   */
  export type commentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * The data needed to create a comment.
     */
    data: XOR<commentCreateInput, commentUncheckedCreateInput>
  }

  /**
   * comment createMany
   */
  export type commentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentCreateManyInput | commentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comment update
   */
  export type commentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * The data needed to update a comment.
     */
    data: XOR<commentUpdateInput, commentUncheckedUpdateInput>
    /**
     * Choose, which comment to update.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment updateMany
   */
  export type commentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comment upsert
   */
  export type commentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * The filter to search for the comment to update in case it exists.
     */
    where: commentWhereUniqueInput
    /**
     * In case the comment found by the `where` argument doesn't exist, create a new comment with this data.
     */
    create: XOR<commentCreateInput, commentUncheckedCreateInput>
    /**
     * In case the comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentUpdateInput, commentUncheckedUpdateInput>
  }

  /**
   * comment delete
   */
  export type commentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter which comment to delete.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment deleteMany
   */
  export type commentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comment without action
   */
  export type commentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
  }


  /**
   * Model Donation
   */

  export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  export type DonationAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type DonationSumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type DonationMinAggregateOutputType = {
    id: number | null
    amount: number | null
    type: string | null
    currency: string | null
    fullName: string | null
    email: string | null
    reference: string | null
    status: string | null
    paymentUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonationMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    type: string | null
    currency: string | null
    fullName: string | null
    email: string | null
    reference: string | null
    status: string | null
    paymentUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonationCountAggregateOutputType = {
    id: number
    amount: number
    type: number
    currency: number
    fullName: number
    email: number
    reference: number
    status: number
    paymentUrl: number
    paymentData: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DonationAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type DonationSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type DonationMinAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    currency?: true
    fullName?: true
    email?: true
    reference?: true
    status?: true
    paymentUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonationMaxAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    currency?: true
    fullName?: true
    email?: true
    reference?: true
    status?: true
    paymentUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonationCountAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    currency?: true
    fullName?: true
    email?: true
    reference?: true
    status?: true
    paymentUrl?: true
    paymentData?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DonationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donation to aggregate.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donations
    **/
    _count?: true | DonationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationMaxAggregateInputType
  }

  export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
        [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonation[P]>
      : GetScalarType<T[P], AggregateDonation[P]>
  }




  export type DonationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithAggregationInput | DonationOrderByWithAggregationInput[]
    by: DonationScalarFieldEnum[] | DonationScalarFieldEnum
    having?: DonationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationCountAggregateInputType | true
    _avg?: DonationAvgAggregateInputType
    _sum?: DonationSumAggregateInputType
    _min?: DonationMinAggregateInputType
    _max?: DonationMaxAggregateInputType
  }

  export type DonationGroupByOutputType = {
    id: number
    amount: number
    type: string
    currency: string
    fullName: string
    email: string
    reference: string
    status: string
    paymentUrl: string | null
    paymentData: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  type GetDonationGroupByPayload<T extends DonationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationGroupByOutputType[P]>
            : GetScalarType<T[P], DonationGroupByOutputType[P]>
        }
      >
    >


  export type DonationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    currency?: boolean
    fullName?: boolean
    email?: boolean
    reference?: boolean
    status?: boolean
    paymentUrl?: boolean
    paymentData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donation"]>



  export type DonationSelectScalar = {
    id?: boolean
    amount?: boolean
    type?: boolean
    currency?: boolean
    fullName?: boolean
    email?: boolean
    reference?: boolean
    status?: boolean
    paymentUrl?: boolean
    paymentData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DonationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "type" | "currency" | "fullName" | "email" | "reference" | "status" | "paymentUrl" | "paymentData" | "createdAt" | "updatedAt", ExtArgs["result"]["donation"]>

  export type $DonationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      type: string
      currency: string
      fullName: string
      email: string
      reference: string
      status: string
      paymentUrl: string | null
      paymentData: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["donation"]>
    composites: {}
  }

  type DonationGetPayload<S extends boolean | null | undefined | DonationDefaultArgs> = $Result.GetResult<Prisma.$DonationPayload, S>

  type DonationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationCountAggregateInputType | true
    }

  export interface DonationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donation'], meta: { name: 'Donation' } }
    /**
     * Find zero or one Donation that matches the filter.
     * @param {DonationFindUniqueArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationFindUniqueArgs>(args: SelectSubset<T, DonationFindUniqueArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationFindUniqueOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationFindFirstArgs>(args?: SelectSubset<T, DonationFindFirstArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donations
     * const donations = await prisma.donation.findMany()
     * 
     * // Get first 10 Donations
     * const donations = await prisma.donation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationWithIdOnly = await prisma.donation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationFindManyArgs>(args?: SelectSubset<T, DonationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donation.
     * @param {DonationCreateArgs} args - Arguments to create a Donation.
     * @example
     * // Create one Donation
     * const Donation = await prisma.donation.create({
     *   data: {
     *     // ... data to create a Donation
     *   }
     * })
     * 
     */
    create<T extends DonationCreateArgs>(args: SelectSubset<T, DonationCreateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donations.
     * @param {DonationCreateManyArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationCreateManyArgs>(args?: SelectSubset<T, DonationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Donation.
     * @param {DonationDeleteArgs} args - Arguments to delete one Donation.
     * @example
     * // Delete one Donation
     * const Donation = await prisma.donation.delete({
     *   where: {
     *     // ... filter to delete one Donation
     *   }
     * })
     * 
     */
    delete<T extends DonationDeleteArgs>(args: SelectSubset<T, DonationDeleteArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donation.
     * @param {DonationUpdateArgs} args - Arguments to update one Donation.
     * @example
     * // Update one Donation
     * const donation = await prisma.donation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationUpdateArgs>(args: SelectSubset<T, DonationUpdateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donations.
     * @param {DonationDeleteManyArgs} args - Arguments to filter Donations to delete.
     * @example
     * // Delete a few Donations
     * const { count } = await prisma.donation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationDeleteManyArgs>(args?: SelectSubset<T, DonationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationUpdateManyArgs>(args: SelectSubset<T, DonationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Donation.
     * @param {DonationUpsertArgs} args - Arguments to update or create a Donation.
     * @example
     * // Update or create a Donation
     * const donation = await prisma.donation.upsert({
     *   create: {
     *     // ... data to create a Donation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donation we want to update
     *   }
     * })
     */
    upsert<T extends DonationUpsertArgs>(args: SelectSubset<T, DonationUpsertArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationCountArgs} args - Arguments to filter Donations to count.
     * @example
     * // Count the number of Donations
     * const count = await prisma.donation.count({
     *   where: {
     *     // ... the filter for the Donations we want to count
     *   }
     * })
    **/
    count<T extends DonationCountArgs>(
      args?: Subset<T, DonationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonationAggregateArgs>(args: Subset<T, DonationAggregateArgs>): Prisma.PrismaPromise<GetDonationAggregateType<T>>

    /**
     * Group by Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationGroupByArgs['orderBy'] }
        : { orderBy?: DonationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donation model
   */
  readonly fields: DonationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Donation model
   */
  interface DonationFieldRefs {
    readonly id: FieldRef<"Donation", 'Int'>
    readonly amount: FieldRef<"Donation", 'Float'>
    readonly type: FieldRef<"Donation", 'String'>
    readonly currency: FieldRef<"Donation", 'String'>
    readonly fullName: FieldRef<"Donation", 'String'>
    readonly email: FieldRef<"Donation", 'String'>
    readonly reference: FieldRef<"Donation", 'String'>
    readonly status: FieldRef<"Donation", 'String'>
    readonly paymentUrl: FieldRef<"Donation", 'String'>
    readonly paymentData: FieldRef<"Donation", 'Json'>
    readonly createdAt: FieldRef<"Donation", 'DateTime'>
    readonly updatedAt: FieldRef<"Donation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Donation findUnique
   */
  export type DonationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findUniqueOrThrow
   */
  export type DonationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findFirst
   */
  export type DonationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findFirstOrThrow
   */
  export type DonationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findMany
   */
  export type DonationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Filter, which Donations to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation create
   */
  export type DonationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data needed to create a Donation.
     */
    data: XOR<DonationCreateInput, DonationUncheckedCreateInput>
  }

  /**
   * Donation createMany
   */
  export type DonationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donation update
   */
  export type DonationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data needed to update a Donation.
     */
    data: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
    /**
     * Choose, which Donation to update.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation updateMany
   */
  export type DonationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
  }

  /**
   * Donation upsert
   */
  export type DonationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The filter to search for the Donation to update in case it exists.
     */
    where: DonationWhereUniqueInput
    /**
     * In case the Donation found by the `where` argument doesn't exist, create a new Donation with this data.
     */
    create: XOR<DonationCreateInput, DonationUncheckedCreateInput>
    /**
     * In case the Donation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
  }

  /**
   * Donation delete
   */
  export type DonationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Filter which Donation to delete.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation deleteMany
   */
  export type DonationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donations to delete
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to delete.
     */
    limit?: number
  }

  /**
   * Donation without action
   */
  export type DonationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
  }


  /**
   * Model VolunteerApplication
   */

  export type AggregateVolunteerApplication = {
    _count: VolunteerApplicationCountAggregateOutputType | null
    _avg: VolunteerApplicationAvgAggregateOutputType | null
    _sum: VolunteerApplicationSumAggregateOutputType | null
    _min: VolunteerApplicationMinAggregateOutputType | null
    _max: VolunteerApplicationMaxAggregateOutputType | null
  }

  export type VolunteerApplicationAvgAggregateOutputType = {
    id: number | null
  }

  export type VolunteerApplicationSumAggregateOutputType = {
    id: number | null
  }

  export type VolunteerApplicationMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    interests: string | null
    motivation: string | null
    approved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VolunteerApplicationMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    interests: string | null
    motivation: string | null
    approved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VolunteerApplicationCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    interests: number
    motivation: number
    approved: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VolunteerApplicationAvgAggregateInputType = {
    id?: true
  }

  export type VolunteerApplicationSumAggregateInputType = {
    id?: true
  }

  export type VolunteerApplicationMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    interests?: true
    motivation?: true
    approved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VolunteerApplicationMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    interests?: true
    motivation?: true
    approved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VolunteerApplicationCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    interests?: true
    motivation?: true
    approved?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VolunteerApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VolunteerApplication to aggregate.
     */
    where?: VolunteerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerApplications to fetch.
     */
    orderBy?: VolunteerApplicationOrderByWithRelationInput | VolunteerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VolunteerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VolunteerApplications
    **/
    _count?: true | VolunteerApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VolunteerApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VolunteerApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolunteerApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolunteerApplicationMaxAggregateInputType
  }

  export type GetVolunteerApplicationAggregateType<T extends VolunteerApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateVolunteerApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolunteerApplication[P]>
      : GetScalarType<T[P], AggregateVolunteerApplication[P]>
  }




  export type VolunteerApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerApplicationWhereInput
    orderBy?: VolunteerApplicationOrderByWithAggregationInput | VolunteerApplicationOrderByWithAggregationInput[]
    by: VolunteerApplicationScalarFieldEnum[] | VolunteerApplicationScalarFieldEnum
    having?: VolunteerApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolunteerApplicationCountAggregateInputType | true
    _avg?: VolunteerApplicationAvgAggregateInputType
    _sum?: VolunteerApplicationSumAggregateInputType
    _min?: VolunteerApplicationMinAggregateInputType
    _max?: VolunteerApplicationMaxAggregateInputType
  }

  export type VolunteerApplicationGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
    interests: string
    motivation: string
    approved: boolean
    createdAt: Date
    updatedAt: Date
    _count: VolunteerApplicationCountAggregateOutputType | null
    _avg: VolunteerApplicationAvgAggregateOutputType | null
    _sum: VolunteerApplicationSumAggregateOutputType | null
    _min: VolunteerApplicationMinAggregateOutputType | null
    _max: VolunteerApplicationMaxAggregateOutputType | null
  }

  type GetVolunteerApplicationGroupByPayload<T extends VolunteerApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolunteerApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolunteerApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolunteerApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], VolunteerApplicationGroupByOutputType[P]>
        }
      >
    >


  export type VolunteerApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    interests?: boolean
    motivation?: boolean
    approved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["volunteerApplication"]>



  export type VolunteerApplicationSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    interests?: boolean
    motivation?: boolean
    approved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VolunteerApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "interests" | "motivation" | "approved" | "createdAt" | "updatedAt", ExtArgs["result"]["volunteerApplication"]>

  export type $VolunteerApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VolunteerApplication"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      phone: string
      interests: string
      motivation: string
      approved: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["volunteerApplication"]>
    composites: {}
  }

  type VolunteerApplicationGetPayload<S extends boolean | null | undefined | VolunteerApplicationDefaultArgs> = $Result.GetResult<Prisma.$VolunteerApplicationPayload, S>

  type VolunteerApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VolunteerApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VolunteerApplicationCountAggregateInputType | true
    }

  export interface VolunteerApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VolunteerApplication'], meta: { name: 'VolunteerApplication' } }
    /**
     * Find zero or one VolunteerApplication that matches the filter.
     * @param {VolunteerApplicationFindUniqueArgs} args - Arguments to find a VolunteerApplication
     * @example
     * // Get one VolunteerApplication
     * const volunteerApplication = await prisma.volunteerApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VolunteerApplicationFindUniqueArgs>(args: SelectSubset<T, VolunteerApplicationFindUniqueArgs<ExtArgs>>): Prisma__VolunteerApplicationClient<$Result.GetResult<Prisma.$VolunteerApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VolunteerApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VolunteerApplicationFindUniqueOrThrowArgs} args - Arguments to find a VolunteerApplication
     * @example
     * // Get one VolunteerApplication
     * const volunteerApplication = await prisma.volunteerApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VolunteerApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, VolunteerApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VolunteerApplicationClient<$Result.GetResult<Prisma.$VolunteerApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VolunteerApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerApplicationFindFirstArgs} args - Arguments to find a VolunteerApplication
     * @example
     * // Get one VolunteerApplication
     * const volunteerApplication = await prisma.volunteerApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VolunteerApplicationFindFirstArgs>(args?: SelectSubset<T, VolunteerApplicationFindFirstArgs<ExtArgs>>): Prisma__VolunteerApplicationClient<$Result.GetResult<Prisma.$VolunteerApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VolunteerApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerApplicationFindFirstOrThrowArgs} args - Arguments to find a VolunteerApplication
     * @example
     * // Get one VolunteerApplication
     * const volunteerApplication = await prisma.volunteerApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VolunteerApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, VolunteerApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VolunteerApplicationClient<$Result.GetResult<Prisma.$VolunteerApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VolunteerApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VolunteerApplications
     * const volunteerApplications = await prisma.volunteerApplication.findMany()
     * 
     * // Get first 10 VolunteerApplications
     * const volunteerApplications = await prisma.volunteerApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volunteerApplicationWithIdOnly = await prisma.volunteerApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VolunteerApplicationFindManyArgs>(args?: SelectSubset<T, VolunteerApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VolunteerApplication.
     * @param {VolunteerApplicationCreateArgs} args - Arguments to create a VolunteerApplication.
     * @example
     * // Create one VolunteerApplication
     * const VolunteerApplication = await prisma.volunteerApplication.create({
     *   data: {
     *     // ... data to create a VolunteerApplication
     *   }
     * })
     * 
     */
    create<T extends VolunteerApplicationCreateArgs>(args: SelectSubset<T, VolunteerApplicationCreateArgs<ExtArgs>>): Prisma__VolunteerApplicationClient<$Result.GetResult<Prisma.$VolunteerApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VolunteerApplications.
     * @param {VolunteerApplicationCreateManyArgs} args - Arguments to create many VolunteerApplications.
     * @example
     * // Create many VolunteerApplications
     * const volunteerApplication = await prisma.volunteerApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VolunteerApplicationCreateManyArgs>(args?: SelectSubset<T, VolunteerApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VolunteerApplication.
     * @param {VolunteerApplicationDeleteArgs} args - Arguments to delete one VolunteerApplication.
     * @example
     * // Delete one VolunteerApplication
     * const VolunteerApplication = await prisma.volunteerApplication.delete({
     *   where: {
     *     // ... filter to delete one VolunteerApplication
     *   }
     * })
     * 
     */
    delete<T extends VolunteerApplicationDeleteArgs>(args: SelectSubset<T, VolunteerApplicationDeleteArgs<ExtArgs>>): Prisma__VolunteerApplicationClient<$Result.GetResult<Prisma.$VolunteerApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VolunteerApplication.
     * @param {VolunteerApplicationUpdateArgs} args - Arguments to update one VolunteerApplication.
     * @example
     * // Update one VolunteerApplication
     * const volunteerApplication = await prisma.volunteerApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VolunteerApplicationUpdateArgs>(args: SelectSubset<T, VolunteerApplicationUpdateArgs<ExtArgs>>): Prisma__VolunteerApplicationClient<$Result.GetResult<Prisma.$VolunteerApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VolunteerApplications.
     * @param {VolunteerApplicationDeleteManyArgs} args - Arguments to filter VolunteerApplications to delete.
     * @example
     * // Delete a few VolunteerApplications
     * const { count } = await prisma.volunteerApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VolunteerApplicationDeleteManyArgs>(args?: SelectSubset<T, VolunteerApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VolunteerApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VolunteerApplications
     * const volunteerApplication = await prisma.volunteerApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VolunteerApplicationUpdateManyArgs>(args: SelectSubset<T, VolunteerApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VolunteerApplication.
     * @param {VolunteerApplicationUpsertArgs} args - Arguments to update or create a VolunteerApplication.
     * @example
     * // Update or create a VolunteerApplication
     * const volunteerApplication = await prisma.volunteerApplication.upsert({
     *   create: {
     *     // ... data to create a VolunteerApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VolunteerApplication we want to update
     *   }
     * })
     */
    upsert<T extends VolunteerApplicationUpsertArgs>(args: SelectSubset<T, VolunteerApplicationUpsertArgs<ExtArgs>>): Prisma__VolunteerApplicationClient<$Result.GetResult<Prisma.$VolunteerApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VolunteerApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerApplicationCountArgs} args - Arguments to filter VolunteerApplications to count.
     * @example
     * // Count the number of VolunteerApplications
     * const count = await prisma.volunteerApplication.count({
     *   where: {
     *     // ... the filter for the VolunteerApplications we want to count
     *   }
     * })
    **/
    count<T extends VolunteerApplicationCountArgs>(
      args?: Subset<T, VolunteerApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolunteerApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VolunteerApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VolunteerApplicationAggregateArgs>(args: Subset<T, VolunteerApplicationAggregateArgs>): Prisma.PrismaPromise<GetVolunteerApplicationAggregateType<T>>

    /**
     * Group by VolunteerApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VolunteerApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VolunteerApplicationGroupByArgs['orderBy'] }
        : { orderBy?: VolunteerApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VolunteerApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolunteerApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VolunteerApplication model
   */
  readonly fields: VolunteerApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VolunteerApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VolunteerApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VolunteerApplication model
   */
  interface VolunteerApplicationFieldRefs {
    readonly id: FieldRef<"VolunteerApplication", 'Int'>
    readonly firstName: FieldRef<"VolunteerApplication", 'String'>
    readonly lastName: FieldRef<"VolunteerApplication", 'String'>
    readonly email: FieldRef<"VolunteerApplication", 'String'>
    readonly phone: FieldRef<"VolunteerApplication", 'String'>
    readonly interests: FieldRef<"VolunteerApplication", 'String'>
    readonly motivation: FieldRef<"VolunteerApplication", 'String'>
    readonly approved: FieldRef<"VolunteerApplication", 'Boolean'>
    readonly createdAt: FieldRef<"VolunteerApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"VolunteerApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VolunteerApplication findUnique
   */
  export type VolunteerApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * Filter, which VolunteerApplication to fetch.
     */
    where: VolunteerApplicationWhereUniqueInput
  }

  /**
   * VolunteerApplication findUniqueOrThrow
   */
  export type VolunteerApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * Filter, which VolunteerApplication to fetch.
     */
    where: VolunteerApplicationWhereUniqueInput
  }

  /**
   * VolunteerApplication findFirst
   */
  export type VolunteerApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * Filter, which VolunteerApplication to fetch.
     */
    where?: VolunteerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerApplications to fetch.
     */
    orderBy?: VolunteerApplicationOrderByWithRelationInput | VolunteerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VolunteerApplications.
     */
    cursor?: VolunteerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VolunteerApplications.
     */
    distinct?: VolunteerApplicationScalarFieldEnum | VolunteerApplicationScalarFieldEnum[]
  }

  /**
   * VolunteerApplication findFirstOrThrow
   */
  export type VolunteerApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * Filter, which VolunteerApplication to fetch.
     */
    where?: VolunteerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerApplications to fetch.
     */
    orderBy?: VolunteerApplicationOrderByWithRelationInput | VolunteerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VolunteerApplications.
     */
    cursor?: VolunteerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VolunteerApplications.
     */
    distinct?: VolunteerApplicationScalarFieldEnum | VolunteerApplicationScalarFieldEnum[]
  }

  /**
   * VolunteerApplication findMany
   */
  export type VolunteerApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * Filter, which VolunteerApplications to fetch.
     */
    where?: VolunteerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerApplications to fetch.
     */
    orderBy?: VolunteerApplicationOrderByWithRelationInput | VolunteerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VolunteerApplications.
     */
    cursor?: VolunteerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerApplications.
     */
    skip?: number
    distinct?: VolunteerApplicationScalarFieldEnum | VolunteerApplicationScalarFieldEnum[]
  }

  /**
   * VolunteerApplication create
   */
  export type VolunteerApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * The data needed to create a VolunteerApplication.
     */
    data: XOR<VolunteerApplicationCreateInput, VolunteerApplicationUncheckedCreateInput>
  }

  /**
   * VolunteerApplication createMany
   */
  export type VolunteerApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VolunteerApplications.
     */
    data: VolunteerApplicationCreateManyInput | VolunteerApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VolunteerApplication update
   */
  export type VolunteerApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * The data needed to update a VolunteerApplication.
     */
    data: XOR<VolunteerApplicationUpdateInput, VolunteerApplicationUncheckedUpdateInput>
    /**
     * Choose, which VolunteerApplication to update.
     */
    where: VolunteerApplicationWhereUniqueInput
  }

  /**
   * VolunteerApplication updateMany
   */
  export type VolunteerApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VolunteerApplications.
     */
    data: XOR<VolunteerApplicationUpdateManyMutationInput, VolunteerApplicationUncheckedUpdateManyInput>
    /**
     * Filter which VolunteerApplications to update
     */
    where?: VolunteerApplicationWhereInput
    /**
     * Limit how many VolunteerApplications to update.
     */
    limit?: number
  }

  /**
   * VolunteerApplication upsert
   */
  export type VolunteerApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * The filter to search for the VolunteerApplication to update in case it exists.
     */
    where: VolunteerApplicationWhereUniqueInput
    /**
     * In case the VolunteerApplication found by the `where` argument doesn't exist, create a new VolunteerApplication with this data.
     */
    create: XOR<VolunteerApplicationCreateInput, VolunteerApplicationUncheckedCreateInput>
    /**
     * In case the VolunteerApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VolunteerApplicationUpdateInput, VolunteerApplicationUncheckedUpdateInput>
  }

  /**
   * VolunteerApplication delete
   */
  export type VolunteerApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * Filter which VolunteerApplication to delete.
     */
    where: VolunteerApplicationWhereUniqueInput
  }

  /**
   * VolunteerApplication deleteMany
   */
  export type VolunteerApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VolunteerApplications to delete
     */
    where?: VolunteerApplicationWhereInput
    /**
     * Limit how many VolunteerApplications to delete.
     */
    limit?: number
  }

  /**
   * VolunteerApplication without action
   */
  export type VolunteerApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    role: 'role',
    profile_image: 'profile_image',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const Project_managerScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    phone_number: 'phone_number',
    role: 'role',
    profile_image: 'profile_image',
    verification_code: 'verification_code',
    email_verified: 'email_verified',
    status: 'status',
    password: 'password',
    temporal_password: 'temporal_password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Project_managerScalarFieldEnum = (typeof Project_managerScalarFieldEnum)[keyof typeof Project_managerScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    project_name: 'project_name',
    project_manager_id: 'project_manager_id',
    task: 'task',
    start_date: 'start_date',
    end_date: 'end_date',
    description: 'description',
    target_entry: 'target_entry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const Data_entryScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    date: 'date',
    location: 'location',
    description: 'description',
    image_url: 'image_url',
    video_url: 'video_url',
    document_url: 'document_url',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Data_entryScalarFieldEnum = (typeof Data_entryScalarFieldEnum)[keyof typeof Data_entryScalarFieldEnum]


  export const BlogsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    published: 'published',
    authorId: 'authorId',
    cover_image: 'cover_image',
    category_id: 'category_id',
    tag_id: 'tag_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    slug: 'slug'
  };

  export type BlogsScalarFieldEnum = (typeof BlogsScalarFieldEnum)[keyof typeof BlogsScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    blog_id: 'blog_id',
    author: 'author',
    email: 'email',
    approved: 'approved',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const DonationScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    type: 'type',
    currency: 'currency',
    fullName: 'fullName',
    email: 'email',
    reference: 'reference',
    status: 'status',
    paymentUrl: 'paymentUrl',
    paymentData: 'paymentData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum]


  export const VolunteerApplicationScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    interests: 'interests',
    motivation: 'motivation',
    approved: 'approved',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VolunteerApplicationScalarFieldEnum = (typeof VolunteerApplicationScalarFieldEnum)[keyof typeof VolunteerApplicationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const adminOrderByRelevanceFieldEnum: {
    fullname: 'fullname',
    email: 'email',
    profile_image: 'profile_image',
    password: 'password'
  };

  export type adminOrderByRelevanceFieldEnum = (typeof adminOrderByRelevanceFieldEnum)[keyof typeof adminOrderByRelevanceFieldEnum]


  export const project_managerOrderByRelevanceFieldEnum: {
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    phone_number: 'phone_number',
    profile_image: 'profile_image',
    verification_code: 'verification_code',
    password: 'password'
  };

  export type project_managerOrderByRelevanceFieldEnum = (typeof project_managerOrderByRelevanceFieldEnum)[keyof typeof project_managerOrderByRelevanceFieldEnum]


  export const projectOrderByRelevanceFieldEnum: {
    project_name: 'project_name',
    task: 'task',
    description: 'description',
    target_entry: 'target_entry'
  };

  export type projectOrderByRelevanceFieldEnum = (typeof projectOrderByRelevanceFieldEnum)[keyof typeof projectOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const data_entryOrderByRelevanceFieldEnum: {
    location: 'location',
    description: 'description',
    image_url: 'image_url',
    video_url: 'video_url',
    document_url: 'document_url'
  };

  export type data_entryOrderByRelevanceFieldEnum = (typeof data_entryOrderByRelevanceFieldEnum)[keyof typeof data_entryOrderByRelevanceFieldEnum]


  export const blogsOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content',
    cover_image: 'cover_image',
    slug: 'slug'
  };

  export type blogsOrderByRelevanceFieldEnum = (typeof blogsOrderByRelevanceFieldEnum)[keyof typeof blogsOrderByRelevanceFieldEnum]


  export const categoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type categoryOrderByRelevanceFieldEnum = (typeof categoryOrderByRelevanceFieldEnum)[keyof typeof categoryOrderByRelevanceFieldEnum]


  export const tagOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type tagOrderByRelevanceFieldEnum = (typeof tagOrderByRelevanceFieldEnum)[keyof typeof tagOrderByRelevanceFieldEnum]


  export const commentOrderByRelevanceFieldEnum: {
    content: 'content',
    author: 'author',
    email: 'email'
  };

  export type commentOrderByRelevanceFieldEnum = (typeof commentOrderByRelevanceFieldEnum)[keyof typeof commentOrderByRelevanceFieldEnum]


  export const DonationOrderByRelevanceFieldEnum: {
    type: 'type',
    currency: 'currency',
    fullName: 'fullName',
    email: 'email',
    reference: 'reference',
    status: 'status',
    paymentUrl: 'paymentUrl'
  };

  export type DonationOrderByRelevanceFieldEnum = (typeof DonationOrderByRelevanceFieldEnum)[keyof typeof DonationOrderByRelevanceFieldEnum]


  export const VolunteerApplicationOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    interests: 'interests',
    motivation: 'motivation'
  };

  export type VolunteerApplicationOrderByRelevanceFieldEnum = (typeof VolunteerApplicationOrderByRelevanceFieldEnum)[keyof typeof VolunteerApplicationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: IntFilter<"admin"> | number
    fullname?: StringFilter<"admin"> | string
    email?: StringFilter<"admin"> | string
    role?: EnumRoleFilter<"admin"> | $Enums.Role
    profile_image?: StringNullableFilter<"admin"> | string | null
    password?: StringFilter<"admin"> | string
    createdAt?: DateTimeFilter<"admin"> | Date | string
    updatedAt?: DateTimeFilter<"admin"> | Date | string
    blog?: BlogsListRelationFilter
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blog?: blogsOrderByRelationAggregateInput
    _relevance?: adminOrderByRelevanceInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    fullname?: StringFilter<"admin"> | string
    role?: EnumRoleFilter<"admin"> | $Enums.Role
    profile_image?: StringNullableFilter<"admin"> | string | null
    password?: StringFilter<"admin"> | string
    createdAt?: DateTimeFilter<"admin"> | Date | string
    updatedAt?: DateTimeFilter<"admin"> | Date | string
    blog?: BlogsListRelationFilter
  }, "id" | "email">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin"> | number
    fullname?: StringWithAggregatesFilter<"admin"> | string
    email?: StringWithAggregatesFilter<"admin"> | string
    role?: EnumRoleWithAggregatesFilter<"admin"> | $Enums.Role
    profile_image?: StringNullableWithAggregatesFilter<"admin"> | string | null
    password?: StringWithAggregatesFilter<"admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"admin"> | Date | string
  }

  export type project_managerWhereInput = {
    AND?: project_managerWhereInput | project_managerWhereInput[]
    OR?: project_managerWhereInput[]
    NOT?: project_managerWhereInput | project_managerWhereInput[]
    id?: IntFilter<"project_manager"> | number
    fullname?: StringFilter<"project_manager"> | string
    username?: StringFilter<"project_manager"> | string
    email?: StringFilter<"project_manager"> | string
    phone_number?: StringFilter<"project_manager"> | string
    role?: EnumRoleFilter<"project_manager"> | $Enums.Role
    profile_image?: StringNullableFilter<"project_manager"> | string | null
    verification_code?: StringNullableFilter<"project_manager"> | string | null
    email_verified?: BoolFilter<"project_manager"> | boolean
    status?: EnumStatusFilter<"project_manager"> | $Enums.Status
    password?: StringFilter<"project_manager"> | string
    temporal_password?: BoolFilter<"project_manager"> | boolean
    createdAt?: DateTimeFilter<"project_manager"> | Date | string
    updatedAt?: DateTimeFilter<"project_manager"> | Date | string
    project?: ProjectListRelationFilter
  }

  export type project_managerOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    verification_code?: SortOrderInput | SortOrder
    email_verified?: SortOrder
    status?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: projectOrderByRelationAggregateInput
    _relevance?: project_managerOrderByRelevanceInput
  }

  export type project_managerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    phone_number?: string
    AND?: project_managerWhereInput | project_managerWhereInput[]
    OR?: project_managerWhereInput[]
    NOT?: project_managerWhereInput | project_managerWhereInput[]
    fullname?: StringFilter<"project_manager"> | string
    role?: EnumRoleFilter<"project_manager"> | $Enums.Role
    profile_image?: StringNullableFilter<"project_manager"> | string | null
    verification_code?: StringNullableFilter<"project_manager"> | string | null
    email_verified?: BoolFilter<"project_manager"> | boolean
    status?: EnumStatusFilter<"project_manager"> | $Enums.Status
    password?: StringFilter<"project_manager"> | string
    temporal_password?: BoolFilter<"project_manager"> | boolean
    createdAt?: DateTimeFilter<"project_manager"> | Date | string
    updatedAt?: DateTimeFilter<"project_manager"> | Date | string
    project?: ProjectListRelationFilter
  }, "id" | "username" | "email" | "phone_number">

  export type project_managerOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    verification_code?: SortOrderInput | SortOrder
    email_verified?: SortOrder
    status?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: project_managerCountOrderByAggregateInput
    _avg?: project_managerAvgOrderByAggregateInput
    _max?: project_managerMaxOrderByAggregateInput
    _min?: project_managerMinOrderByAggregateInput
    _sum?: project_managerSumOrderByAggregateInput
  }

  export type project_managerScalarWhereWithAggregatesInput = {
    AND?: project_managerScalarWhereWithAggregatesInput | project_managerScalarWhereWithAggregatesInput[]
    OR?: project_managerScalarWhereWithAggregatesInput[]
    NOT?: project_managerScalarWhereWithAggregatesInput | project_managerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"project_manager"> | number
    fullname?: StringWithAggregatesFilter<"project_manager"> | string
    username?: StringWithAggregatesFilter<"project_manager"> | string
    email?: StringWithAggregatesFilter<"project_manager"> | string
    phone_number?: StringWithAggregatesFilter<"project_manager"> | string
    role?: EnumRoleWithAggregatesFilter<"project_manager"> | $Enums.Role
    profile_image?: StringNullableWithAggregatesFilter<"project_manager"> | string | null
    verification_code?: StringNullableWithAggregatesFilter<"project_manager"> | string | null
    email_verified?: BoolWithAggregatesFilter<"project_manager"> | boolean
    status?: EnumStatusWithAggregatesFilter<"project_manager"> | $Enums.Status
    password?: StringWithAggregatesFilter<"project_manager"> | string
    temporal_password?: BoolWithAggregatesFilter<"project_manager"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"project_manager"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"project_manager"> | Date | string
  }

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    id?: IntFilter<"project"> | number
    project_name?: StringFilter<"project"> | string
    project_manager_id?: IntFilter<"project"> | number
    task?: StringNullableFilter<"project"> | string | null
    start_date?: DateTimeFilter<"project"> | Date | string
    end_date?: DateTimeFilter<"project"> | Date | string
    description?: StringFilter<"project"> | string
    target_entry?: StringFilter<"project"> | string
    createdAt?: DateTimeFilter<"project"> | Date | string
    updatedAt?: DateTimeFilter<"project"> | Date | string
    project_manager?: XOR<Project_managerScalarRelationFilter, project_managerWhereInput>
    data_entry?: Data_entryListRelationFilter
  }

  export type projectOrderByWithRelationInput = {
    id?: SortOrder
    project_name?: SortOrder
    project_manager_id?: SortOrder
    task?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    description?: SortOrder
    target_entry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project_manager?: project_managerOrderByWithRelationInput
    data_entry?: data_entryOrderByRelationAggregateInput
    _relevance?: projectOrderByRelevanceInput
  }

  export type projectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    project_name?: StringFilter<"project"> | string
    project_manager_id?: IntFilter<"project"> | number
    task?: StringNullableFilter<"project"> | string | null
    start_date?: DateTimeFilter<"project"> | Date | string
    end_date?: DateTimeFilter<"project"> | Date | string
    description?: StringFilter<"project"> | string
    target_entry?: StringFilter<"project"> | string
    createdAt?: DateTimeFilter<"project"> | Date | string
    updatedAt?: DateTimeFilter<"project"> | Date | string
    project_manager?: XOR<Project_managerScalarRelationFilter, project_managerWhereInput>
    data_entry?: Data_entryListRelationFilter
  }, "id">

  export type projectOrderByWithAggregationInput = {
    id?: SortOrder
    project_name?: SortOrder
    project_manager_id?: SortOrder
    task?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    description?: SortOrder
    target_entry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: projectCountOrderByAggregateInput
    _avg?: projectAvgOrderByAggregateInput
    _max?: projectMaxOrderByAggregateInput
    _min?: projectMinOrderByAggregateInput
    _sum?: projectSumOrderByAggregateInput
  }

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    OR?: projectScalarWhereWithAggregatesInput[]
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"project"> | number
    project_name?: StringWithAggregatesFilter<"project"> | string
    project_manager_id?: IntWithAggregatesFilter<"project"> | number
    task?: StringNullableWithAggregatesFilter<"project"> | string | null
    start_date?: DateTimeWithAggregatesFilter<"project"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"project"> | Date | string
    description?: StringWithAggregatesFilter<"project"> | string
    target_entry?: StringWithAggregatesFilter<"project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"project"> | Date | string
  }

  export type data_entryWhereInput = {
    AND?: data_entryWhereInput | data_entryWhereInput[]
    OR?: data_entryWhereInput[]
    NOT?: data_entryWhereInput | data_entryWhereInput[]
    id?: IntFilter<"data_entry"> | number
    project_id?: IntFilter<"data_entry"> | number
    date?: DateTimeFilter<"data_entry"> | Date | string
    location?: StringFilter<"data_entry"> | string
    description?: StringFilter<"data_entry"> | string
    image_url?: StringNullableFilter<"data_entry"> | string | null
    video_url?: StringNullableFilter<"data_entry"> | string | null
    document_url?: StringNullableFilter<"data_entry"> | string | null
    metadata?: JsonNullableFilter<"data_entry">
    createdAt?: DateTimeFilter<"data_entry"> | Date | string
    updatedAt?: DateTimeFilter<"data_entry"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }

  export type data_entryOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrder
    date?: SortOrder
    location?: SortOrder
    description?: SortOrder
    image_url?: SortOrderInput | SortOrder
    video_url?: SortOrderInput | SortOrder
    document_url?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: projectOrderByWithRelationInput
    _relevance?: data_entryOrderByRelevanceInput
  }

  export type data_entryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: data_entryWhereInput | data_entryWhereInput[]
    OR?: data_entryWhereInput[]
    NOT?: data_entryWhereInput | data_entryWhereInput[]
    project_id?: IntFilter<"data_entry"> | number
    date?: DateTimeFilter<"data_entry"> | Date | string
    location?: StringFilter<"data_entry"> | string
    description?: StringFilter<"data_entry"> | string
    image_url?: StringNullableFilter<"data_entry"> | string | null
    video_url?: StringNullableFilter<"data_entry"> | string | null
    document_url?: StringNullableFilter<"data_entry"> | string | null
    metadata?: JsonNullableFilter<"data_entry">
    createdAt?: DateTimeFilter<"data_entry"> | Date | string
    updatedAt?: DateTimeFilter<"data_entry"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }, "id">

  export type data_entryOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrder
    date?: SortOrder
    location?: SortOrder
    description?: SortOrder
    image_url?: SortOrderInput | SortOrder
    video_url?: SortOrderInput | SortOrder
    document_url?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: data_entryCountOrderByAggregateInput
    _avg?: data_entryAvgOrderByAggregateInput
    _max?: data_entryMaxOrderByAggregateInput
    _min?: data_entryMinOrderByAggregateInput
    _sum?: data_entrySumOrderByAggregateInput
  }

  export type data_entryScalarWhereWithAggregatesInput = {
    AND?: data_entryScalarWhereWithAggregatesInput | data_entryScalarWhereWithAggregatesInput[]
    OR?: data_entryScalarWhereWithAggregatesInput[]
    NOT?: data_entryScalarWhereWithAggregatesInput | data_entryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"data_entry"> | number
    project_id?: IntWithAggregatesFilter<"data_entry"> | number
    date?: DateTimeWithAggregatesFilter<"data_entry"> | Date | string
    location?: StringWithAggregatesFilter<"data_entry"> | string
    description?: StringWithAggregatesFilter<"data_entry"> | string
    image_url?: StringNullableWithAggregatesFilter<"data_entry"> | string | null
    video_url?: StringNullableWithAggregatesFilter<"data_entry"> | string | null
    document_url?: StringNullableWithAggregatesFilter<"data_entry"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"data_entry">
    createdAt?: DateTimeWithAggregatesFilter<"data_entry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"data_entry"> | Date | string
  }

  export type blogsWhereInput = {
    AND?: blogsWhereInput | blogsWhereInput[]
    OR?: blogsWhereInput[]
    NOT?: blogsWhereInput | blogsWhereInput[]
    id?: IntFilter<"blogs"> | number
    title?: StringFilter<"blogs"> | string
    content?: StringFilter<"blogs"> | string
    published?: BoolFilter<"blogs"> | boolean
    authorId?: IntFilter<"blogs"> | number
    cover_image?: StringNullableFilter<"blogs"> | string | null
    category_id?: IntFilter<"blogs"> | number
    tag_id?: IntFilter<"blogs"> | number
    createdAt?: DateTimeFilter<"blogs"> | Date | string
    updatedAt?: DateTimeFilter<"blogs"> | Date | string
    slug?: StringFilter<"blogs"> | string
    author?: XOR<AdminScalarRelationFilter, adminWhereInput>
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    tags?: XOR<TagScalarRelationFilter, tagWhereInput>
    comments?: CommentListRelationFilter
  }

  export type blogsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
    cover_image?: SortOrderInput | SortOrder
    category_id?: SortOrder
    tag_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
    author?: adminOrderByWithRelationInput
    category?: categoryOrderByWithRelationInput
    tags?: tagOrderByWithRelationInput
    comments?: commentOrderByRelationAggregateInput
    _relevance?: blogsOrderByRelevanceInput
  }

  export type blogsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: blogsWhereInput | blogsWhereInput[]
    OR?: blogsWhereInput[]
    NOT?: blogsWhereInput | blogsWhereInput[]
    title?: StringFilter<"blogs"> | string
    content?: StringFilter<"blogs"> | string
    published?: BoolFilter<"blogs"> | boolean
    authorId?: IntFilter<"blogs"> | number
    cover_image?: StringNullableFilter<"blogs"> | string | null
    category_id?: IntFilter<"blogs"> | number
    tag_id?: IntFilter<"blogs"> | number
    createdAt?: DateTimeFilter<"blogs"> | Date | string
    updatedAt?: DateTimeFilter<"blogs"> | Date | string
    author?: XOR<AdminScalarRelationFilter, adminWhereInput>
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    tags?: XOR<TagScalarRelationFilter, tagWhereInput>
    comments?: CommentListRelationFilter
  }, "id" | "slug">

  export type blogsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
    cover_image?: SortOrderInput | SortOrder
    category_id?: SortOrder
    tag_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
    _count?: blogsCountOrderByAggregateInput
    _avg?: blogsAvgOrderByAggregateInput
    _max?: blogsMaxOrderByAggregateInput
    _min?: blogsMinOrderByAggregateInput
    _sum?: blogsSumOrderByAggregateInput
  }

  export type blogsScalarWhereWithAggregatesInput = {
    AND?: blogsScalarWhereWithAggregatesInput | blogsScalarWhereWithAggregatesInput[]
    OR?: blogsScalarWhereWithAggregatesInput[]
    NOT?: blogsScalarWhereWithAggregatesInput | blogsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"blogs"> | number
    title?: StringWithAggregatesFilter<"blogs"> | string
    content?: StringWithAggregatesFilter<"blogs"> | string
    published?: BoolWithAggregatesFilter<"blogs"> | boolean
    authorId?: IntWithAggregatesFilter<"blogs"> | number
    cover_image?: StringNullableWithAggregatesFilter<"blogs"> | string | null
    category_id?: IntWithAggregatesFilter<"blogs"> | number
    tag_id?: IntWithAggregatesFilter<"blogs"> | number
    createdAt?: DateTimeWithAggregatesFilter<"blogs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"blogs"> | Date | string
    slug?: StringWithAggregatesFilter<"blogs"> | string
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: IntFilter<"category"> | number
    name?: StringFilter<"category"> | string
    createdAt?: DateTimeFilter<"category"> | Date | string
    updatedAt?: DateTimeFilter<"category"> | Date | string
    blog?: BlogsListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blog?: blogsOrderByRelationAggregateInput
    _relevance?: categoryOrderByRelevanceInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    createdAt?: DateTimeFilter<"category"> | Date | string
    updatedAt?: DateTimeFilter<"category"> | Date | string
    blog?: BlogsListRelationFilter
  }, "id" | "name">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"category"> | number
    name?: StringWithAggregatesFilter<"category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"category"> | Date | string
  }

  export type tagWhereInput = {
    AND?: tagWhereInput | tagWhereInput[]
    OR?: tagWhereInput[]
    NOT?: tagWhereInput | tagWhereInput[]
    id?: IntFilter<"tag"> | number
    name?: StringFilter<"tag"> | string
    createdAt?: DateTimeFilter<"tag"> | Date | string
    updatedAt?: DateTimeFilter<"tag"> | Date | string
    blog?: BlogsListRelationFilter
  }

  export type tagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blog?: blogsOrderByRelationAggregateInput
    _relevance?: tagOrderByRelevanceInput
  }

  export type tagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: tagWhereInput | tagWhereInput[]
    OR?: tagWhereInput[]
    NOT?: tagWhereInput | tagWhereInput[]
    createdAt?: DateTimeFilter<"tag"> | Date | string
    updatedAt?: DateTimeFilter<"tag"> | Date | string
    blog?: BlogsListRelationFilter
  }, "id" | "name">

  export type tagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: tagCountOrderByAggregateInput
    _avg?: tagAvgOrderByAggregateInput
    _max?: tagMaxOrderByAggregateInput
    _min?: tagMinOrderByAggregateInput
    _sum?: tagSumOrderByAggregateInput
  }

  export type tagScalarWhereWithAggregatesInput = {
    AND?: tagScalarWhereWithAggregatesInput | tagScalarWhereWithAggregatesInput[]
    OR?: tagScalarWhereWithAggregatesInput[]
    NOT?: tagScalarWhereWithAggregatesInput | tagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tag"> | number
    name?: StringWithAggregatesFilter<"tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"tag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"tag"> | Date | string
  }

  export type commentWhereInput = {
    AND?: commentWhereInput | commentWhereInput[]
    OR?: commentWhereInput[]
    NOT?: commentWhereInput | commentWhereInput[]
    id?: IntFilter<"comment"> | number
    content?: StringFilter<"comment"> | string
    blog_id?: IntFilter<"comment"> | number
    author?: StringFilter<"comment"> | string
    email?: StringFilter<"comment"> | string
    approved?: BoolFilter<"comment"> | boolean
    createdAt?: DateTimeFilter<"comment"> | Date | string
    updatedAt?: DateTimeFilter<"comment"> | Date | string
    blog?: XOR<BlogsScalarRelationFilter, blogsWhereInput>
  }

  export type commentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    blog_id?: SortOrder
    author?: SortOrder
    email?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blog?: blogsOrderByWithRelationInput
    _relevance?: commentOrderByRelevanceInput
  }

  export type commentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: commentWhereInput | commentWhereInput[]
    OR?: commentWhereInput[]
    NOT?: commentWhereInput | commentWhereInput[]
    content?: StringFilter<"comment"> | string
    blog_id?: IntFilter<"comment"> | number
    author?: StringFilter<"comment"> | string
    email?: StringFilter<"comment"> | string
    approved?: BoolFilter<"comment"> | boolean
    createdAt?: DateTimeFilter<"comment"> | Date | string
    updatedAt?: DateTimeFilter<"comment"> | Date | string
    blog?: XOR<BlogsScalarRelationFilter, blogsWhereInput>
  }, "id">

  export type commentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    blog_id?: SortOrder
    author?: SortOrder
    email?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: commentCountOrderByAggregateInput
    _avg?: commentAvgOrderByAggregateInput
    _max?: commentMaxOrderByAggregateInput
    _min?: commentMinOrderByAggregateInput
    _sum?: commentSumOrderByAggregateInput
  }

  export type commentScalarWhereWithAggregatesInput = {
    AND?: commentScalarWhereWithAggregatesInput | commentScalarWhereWithAggregatesInput[]
    OR?: commentScalarWhereWithAggregatesInput[]
    NOT?: commentScalarWhereWithAggregatesInput | commentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comment"> | number
    content?: StringWithAggregatesFilter<"comment"> | string
    blog_id?: IntWithAggregatesFilter<"comment"> | number
    author?: StringWithAggregatesFilter<"comment"> | string
    email?: StringWithAggregatesFilter<"comment"> | string
    approved?: BoolWithAggregatesFilter<"comment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"comment"> | Date | string
  }

  export type DonationWhereInput = {
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    id?: IntFilter<"Donation"> | number
    amount?: FloatFilter<"Donation"> | number
    type?: StringFilter<"Donation"> | string
    currency?: StringFilter<"Donation"> | string
    fullName?: StringFilter<"Donation"> | string
    email?: StringFilter<"Donation"> | string
    reference?: StringFilter<"Donation"> | string
    status?: StringFilter<"Donation"> | string
    paymentUrl?: StringNullableFilter<"Donation"> | string | null
    paymentData?: JsonNullableFilter<"Donation">
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
  }

  export type DonationOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    paymentUrl?: SortOrderInput | SortOrder
    paymentData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: DonationOrderByRelevanceInput
  }

  export type DonationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reference?: string
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    amount?: FloatFilter<"Donation"> | number
    type?: StringFilter<"Donation"> | string
    currency?: StringFilter<"Donation"> | string
    fullName?: StringFilter<"Donation"> | string
    email?: StringFilter<"Donation"> | string
    status?: StringFilter<"Donation"> | string
    paymentUrl?: StringNullableFilter<"Donation"> | string | null
    paymentData?: JsonNullableFilter<"Donation">
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
  }, "id" | "reference">

  export type DonationOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    paymentUrl?: SortOrderInput | SortOrder
    paymentData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DonationCountOrderByAggregateInput
    _avg?: DonationAvgOrderByAggregateInput
    _max?: DonationMaxOrderByAggregateInput
    _min?: DonationMinOrderByAggregateInput
    _sum?: DonationSumOrderByAggregateInput
  }

  export type DonationScalarWhereWithAggregatesInput = {
    AND?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    OR?: DonationScalarWhereWithAggregatesInput[]
    NOT?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Donation"> | number
    amount?: FloatWithAggregatesFilter<"Donation"> | number
    type?: StringWithAggregatesFilter<"Donation"> | string
    currency?: StringWithAggregatesFilter<"Donation"> | string
    fullName?: StringWithAggregatesFilter<"Donation"> | string
    email?: StringWithAggregatesFilter<"Donation"> | string
    reference?: StringWithAggregatesFilter<"Donation"> | string
    status?: StringWithAggregatesFilter<"Donation"> | string
    paymentUrl?: StringNullableWithAggregatesFilter<"Donation"> | string | null
    paymentData?: JsonNullableWithAggregatesFilter<"Donation">
    createdAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
  }

  export type VolunteerApplicationWhereInput = {
    AND?: VolunteerApplicationWhereInput | VolunteerApplicationWhereInput[]
    OR?: VolunteerApplicationWhereInput[]
    NOT?: VolunteerApplicationWhereInput | VolunteerApplicationWhereInput[]
    id?: IntFilter<"VolunteerApplication"> | number
    firstName?: StringFilter<"VolunteerApplication"> | string
    lastName?: StringFilter<"VolunteerApplication"> | string
    email?: StringFilter<"VolunteerApplication"> | string
    phone?: StringFilter<"VolunteerApplication"> | string
    interests?: StringFilter<"VolunteerApplication"> | string
    motivation?: StringFilter<"VolunteerApplication"> | string
    approved?: BoolFilter<"VolunteerApplication"> | boolean
    createdAt?: DateTimeFilter<"VolunteerApplication"> | Date | string
    updatedAt?: DateTimeFilter<"VolunteerApplication"> | Date | string
  }

  export type VolunteerApplicationOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    interests?: SortOrder
    motivation?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: VolunteerApplicationOrderByRelevanceInput
  }

  export type VolunteerApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: VolunteerApplicationWhereInput | VolunteerApplicationWhereInput[]
    OR?: VolunteerApplicationWhereInput[]
    NOT?: VolunteerApplicationWhereInput | VolunteerApplicationWhereInput[]
    firstName?: StringFilter<"VolunteerApplication"> | string
    lastName?: StringFilter<"VolunteerApplication"> | string
    phone?: StringFilter<"VolunteerApplication"> | string
    interests?: StringFilter<"VolunteerApplication"> | string
    motivation?: StringFilter<"VolunteerApplication"> | string
    approved?: BoolFilter<"VolunteerApplication"> | boolean
    createdAt?: DateTimeFilter<"VolunteerApplication"> | Date | string
    updatedAt?: DateTimeFilter<"VolunteerApplication"> | Date | string
  }, "id" | "email">

  export type VolunteerApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    interests?: SortOrder
    motivation?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VolunteerApplicationCountOrderByAggregateInput
    _avg?: VolunteerApplicationAvgOrderByAggregateInput
    _max?: VolunteerApplicationMaxOrderByAggregateInput
    _min?: VolunteerApplicationMinOrderByAggregateInput
    _sum?: VolunteerApplicationSumOrderByAggregateInput
  }

  export type VolunteerApplicationScalarWhereWithAggregatesInput = {
    AND?: VolunteerApplicationScalarWhereWithAggregatesInput | VolunteerApplicationScalarWhereWithAggregatesInput[]
    OR?: VolunteerApplicationScalarWhereWithAggregatesInput[]
    NOT?: VolunteerApplicationScalarWhereWithAggregatesInput | VolunteerApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VolunteerApplication"> | number
    firstName?: StringWithAggregatesFilter<"VolunteerApplication"> | string
    lastName?: StringWithAggregatesFilter<"VolunteerApplication"> | string
    email?: StringWithAggregatesFilter<"VolunteerApplication"> | string
    phone?: StringWithAggregatesFilter<"VolunteerApplication"> | string
    interests?: StringWithAggregatesFilter<"VolunteerApplication"> | string
    motivation?: StringWithAggregatesFilter<"VolunteerApplication"> | string
    approved?: BoolWithAggregatesFilter<"VolunteerApplication"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"VolunteerApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VolunteerApplication"> | Date | string
  }

  export type adminCreateInput = {
    fullname: string
    email: string
    role?: $Enums.Role
    profile_image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blog?: blogsCreateNestedManyWithoutAuthorInput
  }

  export type adminUncheckedCreateInput = {
    id?: number
    fullname: string
    email: string
    role?: $Enums.Role
    profile_image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blog?: blogsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type adminUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blog?: blogsUpdateManyWithoutAuthorNestedInput
  }

  export type adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blog?: blogsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type adminCreateManyInput = {
    id?: number
    fullname: string
    email: string
    role?: $Enums.Role
    profile_image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type adminUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type project_managerCreateInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project?: projectCreateNestedManyWithoutProject_managerInput
  }

  export type project_managerUncheckedCreateInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project?: projectUncheckedCreateNestedManyWithoutProject_managerInput
  }

  export type project_managerUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUpdateManyWithoutProject_managerNestedInput
  }

  export type project_managerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUncheckedUpdateManyWithoutProject_managerNestedInput
  }

  export type project_managerCreateManyInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type project_managerUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type project_managerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectCreateInput = {
    project_name: string
    task?: string | null
    start_date: Date | string
    end_date: Date | string
    description: string
    target_entry: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project_manager: project_managerCreateNestedOneWithoutProjectInput
    data_entry?: data_entryCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateInput = {
    id?: number
    project_name: string
    project_manager_id: number
    task?: string | null
    start_date: Date | string
    end_date: Date | string
    description: string
    target_entry: string
    createdAt?: Date | string
    updatedAt?: Date | string
    data_entry?: data_entryUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectUpdateInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    task?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    target_entry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project_manager?: project_managerUpdateOneRequiredWithoutProjectNestedInput
    data_entry?: data_entryUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    project_manager_id?: IntFieldUpdateOperationsInput | number
    task?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    target_entry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data_entry?: data_entryUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectCreateManyInput = {
    id?: number
    project_name: string
    project_manager_id: number
    task?: string | null
    start_date: Date | string
    end_date: Date | string
    description: string
    target_entry: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type projectUpdateManyMutationInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    task?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    target_entry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    project_manager_id?: IntFieldUpdateOperationsInput | number
    task?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    target_entry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type data_entryCreateInput = {
    date: Date | string
    location: string
    description: string
    image_url?: string | null
    video_url?: string | null
    document_url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    project: projectCreateNestedOneWithoutData_entryInput
  }

  export type data_entryUncheckedCreateInput = {
    id?: number
    project_id: number
    date: Date | string
    location: string
    description: string
    image_url?: string | null
    video_url?: string | null
    document_url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type data_entryUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUpdateOneRequiredWithoutData_entryNestedInput
  }

  export type data_entryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type data_entryCreateManyInput = {
    id?: number
    project_id: number
    date: Date | string
    location: string
    description: string
    image_url?: string | null
    video_url?: string | null
    document_url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type data_entryUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type data_entryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blogsCreateInput = {
    title: string
    content: string
    published?: boolean
    cover_image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    author: adminCreateNestedOneWithoutBlogInput
    category: categoryCreateNestedOneWithoutBlogInput
    tags: tagCreateNestedOneWithoutBlogInput
    comments?: commentCreateNestedManyWithoutBlogInput
  }

  export type blogsUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    published?: boolean
    authorId: number
    cover_image?: string | null
    category_id: number
    tag_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    comments?: commentUncheckedCreateNestedManyWithoutBlogInput
  }

  export type blogsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    author?: adminUpdateOneRequiredWithoutBlogNestedInput
    category?: categoryUpdateOneRequiredWithoutBlogNestedInput
    tags?: tagUpdateOneRequiredWithoutBlogNestedInput
    comments?: commentUpdateManyWithoutBlogNestedInput
  }

  export type blogsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    comments?: commentUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type blogsCreateManyInput = {
    id?: number
    title: string
    content: string
    published?: boolean
    authorId: number
    cover_image?: string | null
    category_id: number
    tag_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
  }

  export type blogsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type blogsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type categoryCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blog?: blogsCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blog?: blogsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blog?: blogsUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blog?: blogsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tagCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blog?: blogsCreateNestedManyWithoutTagsInput
  }

  export type tagUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blog?: blogsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type tagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blog?: blogsUpdateManyWithoutTagsNestedInput
  }

  export type tagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blog?: blogsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type tagCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentCreateInput = {
    content: string
    author: string
    email: string
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    blog: blogsCreateNestedOneWithoutCommentsInput
  }

  export type commentUncheckedCreateInput = {
    id?: number
    content: string
    blog_id: number
    author: string
    email: string
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type commentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blog?: blogsUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    blog_id?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentCreateManyInput = {
    id?: number
    content: string
    blog_id: number
    author: string
    email: string
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type commentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    blog_id?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationCreateInput = {
    amount: number
    type: string
    currency?: string
    fullName: string
    email: string
    reference: string
    status: string
    paymentUrl?: string | null
    paymentData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationUncheckedCreateInput = {
    id?: number
    amount: number
    type: string
    currency?: string
    fullName: string
    email: string
    reference: string
    status: string
    paymentUrl?: string | null
    paymentData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationCreateManyInput = {
    id?: number
    amount: number
    type: string
    currency?: string
    fullName: string
    email: string
    reference: string
    status: string
    paymentUrl?: string | null
    paymentData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerApplicationCreateInput = {
    firstName: string
    lastName: string
    email: string
    phone: string
    interests: string
    motivation: string
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerApplicationUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone: string
    interests: string
    motivation: string
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerApplicationUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerApplicationCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone: string
    interests: string
    motivation: string
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerApplicationUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BlogsListRelationFilter = {
    every?: blogsWhereInput
    some?: blogsWhereInput
    none?: blogsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type blogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type adminOrderByRelevanceInput = {
    fields: adminOrderByRelevanceFieldEnum | adminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type ProjectListRelationFilter = {
    every?: projectWhereInput
    some?: projectWhereInput
    none?: projectWhereInput
  }

  export type projectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type project_managerOrderByRelevanceInput = {
    fields: project_managerOrderByRelevanceFieldEnum | project_managerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type project_managerCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    verification_code?: SortOrder
    email_verified?: SortOrder
    status?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type project_managerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type project_managerMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    verification_code?: SortOrder
    email_verified?: SortOrder
    status?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type project_managerMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    verification_code?: SortOrder
    email_verified?: SortOrder
    status?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type project_managerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type Project_managerScalarRelationFilter = {
    is?: project_managerWhereInput
    isNot?: project_managerWhereInput
  }

  export type Data_entryListRelationFilter = {
    every?: data_entryWhereInput
    some?: data_entryWhereInput
    none?: data_entryWhereInput
  }

  export type data_entryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectOrderByRelevanceInput = {
    fields: projectOrderByRelevanceFieldEnum | projectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type projectCountOrderByAggregateInput = {
    id?: SortOrder
    project_name?: SortOrder
    project_manager_id?: SortOrder
    task?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    description?: SortOrder
    target_entry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type projectAvgOrderByAggregateInput = {
    id?: SortOrder
    project_manager_id?: SortOrder
  }

  export type projectMaxOrderByAggregateInput = {
    id?: SortOrder
    project_name?: SortOrder
    project_manager_id?: SortOrder
    task?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    description?: SortOrder
    target_entry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type projectMinOrderByAggregateInput = {
    id?: SortOrder
    project_name?: SortOrder
    project_manager_id?: SortOrder
    task?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    description?: SortOrder
    target_entry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type projectSumOrderByAggregateInput = {
    id?: SortOrder
    project_manager_id?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProjectScalarRelationFilter = {
    is?: projectWhereInput
    isNot?: projectWhereInput
  }

  export type data_entryOrderByRelevanceInput = {
    fields: data_entryOrderByRelevanceFieldEnum | data_entryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type data_entryCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    date?: SortOrder
    location?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    video_url?: SortOrder
    document_url?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type data_entryAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type data_entryMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    date?: SortOrder
    location?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    video_url?: SortOrder
    document_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type data_entryMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    date?: SortOrder
    location?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    video_url?: SortOrder
    document_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type data_entrySumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type AdminScalarRelationFilter = {
    is?: adminWhereInput
    isNot?: adminWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: categoryWhereInput
    isNot?: categoryWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: tagWhereInput
    isNot?: tagWhereInput
  }

  export type CommentListRelationFilter = {
    every?: commentWhereInput
    some?: commentWhereInput
    none?: commentWhereInput
  }

  export type commentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type blogsOrderByRelevanceInput = {
    fields: blogsOrderByRelevanceFieldEnum | blogsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type blogsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
    cover_image?: SortOrder
    category_id?: SortOrder
    tag_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
  }

  export type blogsAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    category_id?: SortOrder
    tag_id?: SortOrder
  }

  export type blogsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
    cover_image?: SortOrder
    category_id?: SortOrder
    tag_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
  }

  export type blogsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
    cover_image?: SortOrder
    category_id?: SortOrder
    tag_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
  }

  export type blogsSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    category_id?: SortOrder
    tag_id?: SortOrder
  }

  export type categoryOrderByRelevanceInput = {
    fields: categoryOrderByRelevanceFieldEnum | categoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tagOrderByRelevanceInput = {
    fields: tagOrderByRelevanceFieldEnum | tagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BlogsScalarRelationFilter = {
    is?: blogsWhereInput
    isNot?: blogsWhereInput
  }

  export type commentOrderByRelevanceInput = {
    fields: commentOrderByRelevanceFieldEnum | commentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type commentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    blog_id?: SortOrder
    author?: SortOrder
    email?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type commentAvgOrderByAggregateInput = {
    id?: SortOrder
    blog_id?: SortOrder
  }

  export type commentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    blog_id?: SortOrder
    author?: SortOrder
    email?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type commentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    blog_id?: SortOrder
    author?: SortOrder
    email?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type commentSumOrderByAggregateInput = {
    id?: SortOrder
    blog_id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DonationOrderByRelevanceInput = {
    fields: DonationOrderByRelevanceFieldEnum | DonationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DonationCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    paymentUrl?: SortOrder
    paymentData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type DonationMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    paymentUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    paymentUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type VolunteerApplicationOrderByRelevanceInput = {
    fields: VolunteerApplicationOrderByRelevanceFieldEnum | VolunteerApplicationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VolunteerApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    interests?: SortOrder
    motivation?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VolunteerApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VolunteerApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    interests?: SortOrder
    motivation?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VolunteerApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    interests?: SortOrder
    motivation?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VolunteerApplicationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type blogsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<blogsCreateWithoutAuthorInput, blogsUncheckedCreateWithoutAuthorInput> | blogsCreateWithoutAuthorInput[] | blogsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: blogsCreateOrConnectWithoutAuthorInput | blogsCreateOrConnectWithoutAuthorInput[]
    createMany?: blogsCreateManyAuthorInputEnvelope
    connect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
  }

  export type blogsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<blogsCreateWithoutAuthorInput, blogsUncheckedCreateWithoutAuthorInput> | blogsCreateWithoutAuthorInput[] | blogsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: blogsCreateOrConnectWithoutAuthorInput | blogsCreateOrConnectWithoutAuthorInput[]
    createMany?: blogsCreateManyAuthorInputEnvelope
    connect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type blogsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<blogsCreateWithoutAuthorInput, blogsUncheckedCreateWithoutAuthorInput> | blogsCreateWithoutAuthorInput[] | blogsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: blogsCreateOrConnectWithoutAuthorInput | blogsCreateOrConnectWithoutAuthorInput[]
    upsert?: blogsUpsertWithWhereUniqueWithoutAuthorInput | blogsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: blogsCreateManyAuthorInputEnvelope
    set?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    disconnect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    delete?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    connect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    update?: blogsUpdateWithWhereUniqueWithoutAuthorInput | blogsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: blogsUpdateManyWithWhereWithoutAuthorInput | blogsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: blogsScalarWhereInput | blogsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type blogsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<blogsCreateWithoutAuthorInput, blogsUncheckedCreateWithoutAuthorInput> | blogsCreateWithoutAuthorInput[] | blogsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: blogsCreateOrConnectWithoutAuthorInput | blogsCreateOrConnectWithoutAuthorInput[]
    upsert?: blogsUpsertWithWhereUniqueWithoutAuthorInput | blogsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: blogsCreateManyAuthorInputEnvelope
    set?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    disconnect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    delete?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    connect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    update?: blogsUpdateWithWhereUniqueWithoutAuthorInput | blogsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: blogsUpdateManyWithWhereWithoutAuthorInput | blogsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: blogsScalarWhereInput | blogsScalarWhereInput[]
  }

  export type projectCreateNestedManyWithoutProject_managerInput = {
    create?: XOR<projectCreateWithoutProject_managerInput, projectUncheckedCreateWithoutProject_managerInput> | projectCreateWithoutProject_managerInput[] | projectUncheckedCreateWithoutProject_managerInput[]
    connectOrCreate?: projectCreateOrConnectWithoutProject_managerInput | projectCreateOrConnectWithoutProject_managerInput[]
    createMany?: projectCreateManyProject_managerInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type projectUncheckedCreateNestedManyWithoutProject_managerInput = {
    create?: XOR<projectCreateWithoutProject_managerInput, projectUncheckedCreateWithoutProject_managerInput> | projectCreateWithoutProject_managerInput[] | projectUncheckedCreateWithoutProject_managerInput[]
    connectOrCreate?: projectCreateOrConnectWithoutProject_managerInput | projectCreateOrConnectWithoutProject_managerInput[]
    createMany?: projectCreateManyProject_managerInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type projectUpdateManyWithoutProject_managerNestedInput = {
    create?: XOR<projectCreateWithoutProject_managerInput, projectUncheckedCreateWithoutProject_managerInput> | projectCreateWithoutProject_managerInput[] | projectUncheckedCreateWithoutProject_managerInput[]
    connectOrCreate?: projectCreateOrConnectWithoutProject_managerInput | projectCreateOrConnectWithoutProject_managerInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutProject_managerInput | projectUpsertWithWhereUniqueWithoutProject_managerInput[]
    createMany?: projectCreateManyProject_managerInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutProject_managerInput | projectUpdateWithWhereUniqueWithoutProject_managerInput[]
    updateMany?: projectUpdateManyWithWhereWithoutProject_managerInput | projectUpdateManyWithWhereWithoutProject_managerInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type projectUncheckedUpdateManyWithoutProject_managerNestedInput = {
    create?: XOR<projectCreateWithoutProject_managerInput, projectUncheckedCreateWithoutProject_managerInput> | projectCreateWithoutProject_managerInput[] | projectUncheckedCreateWithoutProject_managerInput[]
    connectOrCreate?: projectCreateOrConnectWithoutProject_managerInput | projectCreateOrConnectWithoutProject_managerInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutProject_managerInput | projectUpsertWithWhereUniqueWithoutProject_managerInput[]
    createMany?: projectCreateManyProject_managerInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutProject_managerInput | projectUpdateWithWhereUniqueWithoutProject_managerInput[]
    updateMany?: projectUpdateManyWithWhereWithoutProject_managerInput | projectUpdateManyWithWhereWithoutProject_managerInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type project_managerCreateNestedOneWithoutProjectInput = {
    create?: XOR<project_managerCreateWithoutProjectInput, project_managerUncheckedCreateWithoutProjectInput>
    connectOrCreate?: project_managerCreateOrConnectWithoutProjectInput
    connect?: project_managerWhereUniqueInput
  }

  export type data_entryCreateNestedManyWithoutProjectInput = {
    create?: XOR<data_entryCreateWithoutProjectInput, data_entryUncheckedCreateWithoutProjectInput> | data_entryCreateWithoutProjectInput[] | data_entryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: data_entryCreateOrConnectWithoutProjectInput | data_entryCreateOrConnectWithoutProjectInput[]
    createMany?: data_entryCreateManyProjectInputEnvelope
    connect?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
  }

  export type data_entryUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<data_entryCreateWithoutProjectInput, data_entryUncheckedCreateWithoutProjectInput> | data_entryCreateWithoutProjectInput[] | data_entryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: data_entryCreateOrConnectWithoutProjectInput | data_entryCreateOrConnectWithoutProjectInput[]
    createMany?: data_entryCreateManyProjectInputEnvelope
    connect?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
  }

  export type project_managerUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<project_managerCreateWithoutProjectInput, project_managerUncheckedCreateWithoutProjectInput>
    connectOrCreate?: project_managerCreateOrConnectWithoutProjectInput
    upsert?: project_managerUpsertWithoutProjectInput
    connect?: project_managerWhereUniqueInput
    update?: XOR<XOR<project_managerUpdateToOneWithWhereWithoutProjectInput, project_managerUpdateWithoutProjectInput>, project_managerUncheckedUpdateWithoutProjectInput>
  }

  export type data_entryUpdateManyWithoutProjectNestedInput = {
    create?: XOR<data_entryCreateWithoutProjectInput, data_entryUncheckedCreateWithoutProjectInput> | data_entryCreateWithoutProjectInput[] | data_entryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: data_entryCreateOrConnectWithoutProjectInput | data_entryCreateOrConnectWithoutProjectInput[]
    upsert?: data_entryUpsertWithWhereUniqueWithoutProjectInput | data_entryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: data_entryCreateManyProjectInputEnvelope
    set?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
    disconnect?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
    delete?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
    connect?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
    update?: data_entryUpdateWithWhereUniqueWithoutProjectInput | data_entryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: data_entryUpdateManyWithWhereWithoutProjectInput | data_entryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: data_entryScalarWhereInput | data_entryScalarWhereInput[]
  }

  export type data_entryUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<data_entryCreateWithoutProjectInput, data_entryUncheckedCreateWithoutProjectInput> | data_entryCreateWithoutProjectInput[] | data_entryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: data_entryCreateOrConnectWithoutProjectInput | data_entryCreateOrConnectWithoutProjectInput[]
    upsert?: data_entryUpsertWithWhereUniqueWithoutProjectInput | data_entryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: data_entryCreateManyProjectInputEnvelope
    set?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
    disconnect?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
    delete?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
    connect?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
    update?: data_entryUpdateWithWhereUniqueWithoutProjectInput | data_entryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: data_entryUpdateManyWithWhereWithoutProjectInput | data_entryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: data_entryScalarWhereInput | data_entryScalarWhereInput[]
  }

  export type projectCreateNestedOneWithoutData_entryInput = {
    create?: XOR<projectCreateWithoutData_entryInput, projectUncheckedCreateWithoutData_entryInput>
    connectOrCreate?: projectCreateOrConnectWithoutData_entryInput
    connect?: projectWhereUniqueInput
  }

  export type projectUpdateOneRequiredWithoutData_entryNestedInput = {
    create?: XOR<projectCreateWithoutData_entryInput, projectUncheckedCreateWithoutData_entryInput>
    connectOrCreate?: projectCreateOrConnectWithoutData_entryInput
    upsert?: projectUpsertWithoutData_entryInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutData_entryInput, projectUpdateWithoutData_entryInput>, projectUncheckedUpdateWithoutData_entryInput>
  }

  export type adminCreateNestedOneWithoutBlogInput = {
    create?: XOR<adminCreateWithoutBlogInput, adminUncheckedCreateWithoutBlogInput>
    connectOrCreate?: adminCreateOrConnectWithoutBlogInput
    connect?: adminWhereUniqueInput
  }

  export type categoryCreateNestedOneWithoutBlogInput = {
    create?: XOR<categoryCreateWithoutBlogInput, categoryUncheckedCreateWithoutBlogInput>
    connectOrCreate?: categoryCreateOrConnectWithoutBlogInput
    connect?: categoryWhereUniqueInput
  }

  export type tagCreateNestedOneWithoutBlogInput = {
    create?: XOR<tagCreateWithoutBlogInput, tagUncheckedCreateWithoutBlogInput>
    connectOrCreate?: tagCreateOrConnectWithoutBlogInput
    connect?: tagWhereUniqueInput
  }

  export type commentCreateNestedManyWithoutBlogInput = {
    create?: XOR<commentCreateWithoutBlogInput, commentUncheckedCreateWithoutBlogInput> | commentCreateWithoutBlogInput[] | commentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: commentCreateOrConnectWithoutBlogInput | commentCreateOrConnectWithoutBlogInput[]
    createMany?: commentCreateManyBlogInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type commentUncheckedCreateNestedManyWithoutBlogInput = {
    create?: XOR<commentCreateWithoutBlogInput, commentUncheckedCreateWithoutBlogInput> | commentCreateWithoutBlogInput[] | commentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: commentCreateOrConnectWithoutBlogInput | commentCreateOrConnectWithoutBlogInput[]
    createMany?: commentCreateManyBlogInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type adminUpdateOneRequiredWithoutBlogNestedInput = {
    create?: XOR<adminCreateWithoutBlogInput, adminUncheckedCreateWithoutBlogInput>
    connectOrCreate?: adminCreateOrConnectWithoutBlogInput
    upsert?: adminUpsertWithoutBlogInput
    connect?: adminWhereUniqueInput
    update?: XOR<XOR<adminUpdateToOneWithWhereWithoutBlogInput, adminUpdateWithoutBlogInput>, adminUncheckedUpdateWithoutBlogInput>
  }

  export type categoryUpdateOneRequiredWithoutBlogNestedInput = {
    create?: XOR<categoryCreateWithoutBlogInput, categoryUncheckedCreateWithoutBlogInput>
    connectOrCreate?: categoryCreateOrConnectWithoutBlogInput
    upsert?: categoryUpsertWithoutBlogInput
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutBlogInput, categoryUpdateWithoutBlogInput>, categoryUncheckedUpdateWithoutBlogInput>
  }

  export type tagUpdateOneRequiredWithoutBlogNestedInput = {
    create?: XOR<tagCreateWithoutBlogInput, tagUncheckedCreateWithoutBlogInput>
    connectOrCreate?: tagCreateOrConnectWithoutBlogInput
    upsert?: tagUpsertWithoutBlogInput
    connect?: tagWhereUniqueInput
    update?: XOR<XOR<tagUpdateToOneWithWhereWithoutBlogInput, tagUpdateWithoutBlogInput>, tagUncheckedUpdateWithoutBlogInput>
  }

  export type commentUpdateManyWithoutBlogNestedInput = {
    create?: XOR<commentCreateWithoutBlogInput, commentUncheckedCreateWithoutBlogInput> | commentCreateWithoutBlogInput[] | commentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: commentCreateOrConnectWithoutBlogInput | commentCreateOrConnectWithoutBlogInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutBlogInput | commentUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: commentCreateManyBlogInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutBlogInput | commentUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: commentUpdateManyWithWhereWithoutBlogInput | commentUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type commentUncheckedUpdateManyWithoutBlogNestedInput = {
    create?: XOR<commentCreateWithoutBlogInput, commentUncheckedCreateWithoutBlogInput> | commentCreateWithoutBlogInput[] | commentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: commentCreateOrConnectWithoutBlogInput | commentCreateOrConnectWithoutBlogInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutBlogInput | commentUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: commentCreateManyBlogInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutBlogInput | commentUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: commentUpdateManyWithWhereWithoutBlogInput | commentUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type blogsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<blogsCreateWithoutCategoryInput, blogsUncheckedCreateWithoutCategoryInput> | blogsCreateWithoutCategoryInput[] | blogsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: blogsCreateOrConnectWithoutCategoryInput | blogsCreateOrConnectWithoutCategoryInput[]
    createMany?: blogsCreateManyCategoryInputEnvelope
    connect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
  }

  export type blogsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<blogsCreateWithoutCategoryInput, blogsUncheckedCreateWithoutCategoryInput> | blogsCreateWithoutCategoryInput[] | blogsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: blogsCreateOrConnectWithoutCategoryInput | blogsCreateOrConnectWithoutCategoryInput[]
    createMany?: blogsCreateManyCategoryInputEnvelope
    connect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
  }

  export type blogsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<blogsCreateWithoutCategoryInput, blogsUncheckedCreateWithoutCategoryInput> | blogsCreateWithoutCategoryInput[] | blogsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: blogsCreateOrConnectWithoutCategoryInput | blogsCreateOrConnectWithoutCategoryInput[]
    upsert?: blogsUpsertWithWhereUniqueWithoutCategoryInput | blogsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: blogsCreateManyCategoryInputEnvelope
    set?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    disconnect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    delete?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    connect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    update?: blogsUpdateWithWhereUniqueWithoutCategoryInput | blogsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: blogsUpdateManyWithWhereWithoutCategoryInput | blogsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: blogsScalarWhereInput | blogsScalarWhereInput[]
  }

  export type blogsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<blogsCreateWithoutCategoryInput, blogsUncheckedCreateWithoutCategoryInput> | blogsCreateWithoutCategoryInput[] | blogsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: blogsCreateOrConnectWithoutCategoryInput | blogsCreateOrConnectWithoutCategoryInput[]
    upsert?: blogsUpsertWithWhereUniqueWithoutCategoryInput | blogsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: blogsCreateManyCategoryInputEnvelope
    set?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    disconnect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    delete?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    connect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    update?: blogsUpdateWithWhereUniqueWithoutCategoryInput | blogsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: blogsUpdateManyWithWhereWithoutCategoryInput | blogsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: blogsScalarWhereInput | blogsScalarWhereInput[]
  }

  export type blogsCreateNestedManyWithoutTagsInput = {
    create?: XOR<blogsCreateWithoutTagsInput, blogsUncheckedCreateWithoutTagsInput> | blogsCreateWithoutTagsInput[] | blogsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: blogsCreateOrConnectWithoutTagsInput | blogsCreateOrConnectWithoutTagsInput[]
    createMany?: blogsCreateManyTagsInputEnvelope
    connect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
  }

  export type blogsUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<blogsCreateWithoutTagsInput, blogsUncheckedCreateWithoutTagsInput> | blogsCreateWithoutTagsInput[] | blogsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: blogsCreateOrConnectWithoutTagsInput | blogsCreateOrConnectWithoutTagsInput[]
    createMany?: blogsCreateManyTagsInputEnvelope
    connect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
  }

  export type blogsUpdateManyWithoutTagsNestedInput = {
    create?: XOR<blogsCreateWithoutTagsInput, blogsUncheckedCreateWithoutTagsInput> | blogsCreateWithoutTagsInput[] | blogsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: blogsCreateOrConnectWithoutTagsInput | blogsCreateOrConnectWithoutTagsInput[]
    upsert?: blogsUpsertWithWhereUniqueWithoutTagsInput | blogsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: blogsCreateManyTagsInputEnvelope
    set?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    disconnect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    delete?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    connect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    update?: blogsUpdateWithWhereUniqueWithoutTagsInput | blogsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: blogsUpdateManyWithWhereWithoutTagsInput | blogsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: blogsScalarWhereInput | blogsScalarWhereInput[]
  }

  export type blogsUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<blogsCreateWithoutTagsInput, blogsUncheckedCreateWithoutTagsInput> | blogsCreateWithoutTagsInput[] | blogsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: blogsCreateOrConnectWithoutTagsInput | blogsCreateOrConnectWithoutTagsInput[]
    upsert?: blogsUpsertWithWhereUniqueWithoutTagsInput | blogsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: blogsCreateManyTagsInputEnvelope
    set?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    disconnect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    delete?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    connect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    update?: blogsUpdateWithWhereUniqueWithoutTagsInput | blogsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: blogsUpdateManyWithWhereWithoutTagsInput | blogsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: blogsScalarWhereInput | blogsScalarWhereInput[]
  }

  export type blogsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<blogsCreateWithoutCommentsInput, blogsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: blogsCreateOrConnectWithoutCommentsInput
    connect?: blogsWhereUniqueInput
  }

  export type blogsUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<blogsCreateWithoutCommentsInput, blogsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: blogsCreateOrConnectWithoutCommentsInput
    upsert?: blogsUpsertWithoutCommentsInput
    connect?: blogsWhereUniqueInput
    update?: XOR<XOR<blogsUpdateToOneWithWhereWithoutCommentsInput, blogsUpdateWithoutCommentsInput>, blogsUncheckedUpdateWithoutCommentsInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type blogsCreateWithoutAuthorInput = {
    title: string
    content: string
    published?: boolean
    cover_image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    category: categoryCreateNestedOneWithoutBlogInput
    tags: tagCreateNestedOneWithoutBlogInput
    comments?: commentCreateNestedManyWithoutBlogInput
  }

  export type blogsUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    content: string
    published?: boolean
    cover_image?: string | null
    category_id: number
    tag_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    comments?: commentUncheckedCreateNestedManyWithoutBlogInput
  }

  export type blogsCreateOrConnectWithoutAuthorInput = {
    where: blogsWhereUniqueInput
    create: XOR<blogsCreateWithoutAuthorInput, blogsUncheckedCreateWithoutAuthorInput>
  }

  export type blogsCreateManyAuthorInputEnvelope = {
    data: blogsCreateManyAuthorInput | blogsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type blogsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: blogsWhereUniqueInput
    update: XOR<blogsUpdateWithoutAuthorInput, blogsUncheckedUpdateWithoutAuthorInput>
    create: XOR<blogsCreateWithoutAuthorInput, blogsUncheckedCreateWithoutAuthorInput>
  }

  export type blogsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: blogsWhereUniqueInput
    data: XOR<blogsUpdateWithoutAuthorInput, blogsUncheckedUpdateWithoutAuthorInput>
  }

  export type blogsUpdateManyWithWhereWithoutAuthorInput = {
    where: blogsScalarWhereInput
    data: XOR<blogsUpdateManyMutationInput, blogsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type blogsScalarWhereInput = {
    AND?: blogsScalarWhereInput | blogsScalarWhereInput[]
    OR?: blogsScalarWhereInput[]
    NOT?: blogsScalarWhereInput | blogsScalarWhereInput[]
    id?: IntFilter<"blogs"> | number
    title?: StringFilter<"blogs"> | string
    content?: StringFilter<"blogs"> | string
    published?: BoolFilter<"blogs"> | boolean
    authorId?: IntFilter<"blogs"> | number
    cover_image?: StringNullableFilter<"blogs"> | string | null
    category_id?: IntFilter<"blogs"> | number
    tag_id?: IntFilter<"blogs"> | number
    createdAt?: DateTimeFilter<"blogs"> | Date | string
    updatedAt?: DateTimeFilter<"blogs"> | Date | string
    slug?: StringFilter<"blogs"> | string
  }

  export type projectCreateWithoutProject_managerInput = {
    project_name: string
    task?: string | null
    start_date: Date | string
    end_date: Date | string
    description: string
    target_entry: string
    createdAt?: Date | string
    updatedAt?: Date | string
    data_entry?: data_entryCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutProject_managerInput = {
    id?: number
    project_name: string
    task?: string | null
    start_date: Date | string
    end_date: Date | string
    description: string
    target_entry: string
    createdAt?: Date | string
    updatedAt?: Date | string
    data_entry?: data_entryUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutProject_managerInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutProject_managerInput, projectUncheckedCreateWithoutProject_managerInput>
  }

  export type projectCreateManyProject_managerInputEnvelope = {
    data: projectCreateManyProject_managerInput | projectCreateManyProject_managerInput[]
    skipDuplicates?: boolean
  }

  export type projectUpsertWithWhereUniqueWithoutProject_managerInput = {
    where: projectWhereUniqueInput
    update: XOR<projectUpdateWithoutProject_managerInput, projectUncheckedUpdateWithoutProject_managerInput>
    create: XOR<projectCreateWithoutProject_managerInput, projectUncheckedCreateWithoutProject_managerInput>
  }

  export type projectUpdateWithWhereUniqueWithoutProject_managerInput = {
    where: projectWhereUniqueInput
    data: XOR<projectUpdateWithoutProject_managerInput, projectUncheckedUpdateWithoutProject_managerInput>
  }

  export type projectUpdateManyWithWhereWithoutProject_managerInput = {
    where: projectScalarWhereInput
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyWithoutProject_managerInput>
  }

  export type projectScalarWhereInput = {
    AND?: projectScalarWhereInput | projectScalarWhereInput[]
    OR?: projectScalarWhereInput[]
    NOT?: projectScalarWhereInput | projectScalarWhereInput[]
    id?: IntFilter<"project"> | number
    project_name?: StringFilter<"project"> | string
    project_manager_id?: IntFilter<"project"> | number
    task?: StringNullableFilter<"project"> | string | null
    start_date?: DateTimeFilter<"project"> | Date | string
    end_date?: DateTimeFilter<"project"> | Date | string
    description?: StringFilter<"project"> | string
    target_entry?: StringFilter<"project"> | string
    createdAt?: DateTimeFilter<"project"> | Date | string
    updatedAt?: DateTimeFilter<"project"> | Date | string
  }

  export type project_managerCreateWithoutProjectInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type project_managerUncheckedCreateWithoutProjectInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type project_managerCreateOrConnectWithoutProjectInput = {
    where: project_managerWhereUniqueInput
    create: XOR<project_managerCreateWithoutProjectInput, project_managerUncheckedCreateWithoutProjectInput>
  }

  export type data_entryCreateWithoutProjectInput = {
    date: Date | string
    location: string
    description: string
    image_url?: string | null
    video_url?: string | null
    document_url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type data_entryUncheckedCreateWithoutProjectInput = {
    id?: number
    date: Date | string
    location: string
    description: string
    image_url?: string | null
    video_url?: string | null
    document_url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type data_entryCreateOrConnectWithoutProjectInput = {
    where: data_entryWhereUniqueInput
    create: XOR<data_entryCreateWithoutProjectInput, data_entryUncheckedCreateWithoutProjectInput>
  }

  export type data_entryCreateManyProjectInputEnvelope = {
    data: data_entryCreateManyProjectInput | data_entryCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type project_managerUpsertWithoutProjectInput = {
    update: XOR<project_managerUpdateWithoutProjectInput, project_managerUncheckedUpdateWithoutProjectInput>
    create: XOR<project_managerCreateWithoutProjectInput, project_managerUncheckedCreateWithoutProjectInput>
    where?: project_managerWhereInput
  }

  export type project_managerUpdateToOneWithWhereWithoutProjectInput = {
    where?: project_managerWhereInput
    data: XOR<project_managerUpdateWithoutProjectInput, project_managerUncheckedUpdateWithoutProjectInput>
  }

  export type project_managerUpdateWithoutProjectInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type project_managerUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type data_entryUpsertWithWhereUniqueWithoutProjectInput = {
    where: data_entryWhereUniqueInput
    update: XOR<data_entryUpdateWithoutProjectInput, data_entryUncheckedUpdateWithoutProjectInput>
    create: XOR<data_entryCreateWithoutProjectInput, data_entryUncheckedCreateWithoutProjectInput>
  }

  export type data_entryUpdateWithWhereUniqueWithoutProjectInput = {
    where: data_entryWhereUniqueInput
    data: XOR<data_entryUpdateWithoutProjectInput, data_entryUncheckedUpdateWithoutProjectInput>
  }

  export type data_entryUpdateManyWithWhereWithoutProjectInput = {
    where: data_entryScalarWhereInput
    data: XOR<data_entryUpdateManyMutationInput, data_entryUncheckedUpdateManyWithoutProjectInput>
  }

  export type data_entryScalarWhereInput = {
    AND?: data_entryScalarWhereInput | data_entryScalarWhereInput[]
    OR?: data_entryScalarWhereInput[]
    NOT?: data_entryScalarWhereInput | data_entryScalarWhereInput[]
    id?: IntFilter<"data_entry"> | number
    project_id?: IntFilter<"data_entry"> | number
    date?: DateTimeFilter<"data_entry"> | Date | string
    location?: StringFilter<"data_entry"> | string
    description?: StringFilter<"data_entry"> | string
    image_url?: StringNullableFilter<"data_entry"> | string | null
    video_url?: StringNullableFilter<"data_entry"> | string | null
    document_url?: StringNullableFilter<"data_entry"> | string | null
    metadata?: JsonNullableFilter<"data_entry">
    createdAt?: DateTimeFilter<"data_entry"> | Date | string
    updatedAt?: DateTimeFilter<"data_entry"> | Date | string
  }

  export type projectCreateWithoutData_entryInput = {
    project_name: string
    task?: string | null
    start_date: Date | string
    end_date: Date | string
    description: string
    target_entry: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project_manager: project_managerCreateNestedOneWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutData_entryInput = {
    id?: number
    project_name: string
    project_manager_id: number
    task?: string | null
    start_date: Date | string
    end_date: Date | string
    description: string
    target_entry: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type projectCreateOrConnectWithoutData_entryInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutData_entryInput, projectUncheckedCreateWithoutData_entryInput>
  }

  export type projectUpsertWithoutData_entryInput = {
    update: XOR<projectUpdateWithoutData_entryInput, projectUncheckedUpdateWithoutData_entryInput>
    create: XOR<projectCreateWithoutData_entryInput, projectUncheckedCreateWithoutData_entryInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutData_entryInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutData_entryInput, projectUncheckedUpdateWithoutData_entryInput>
  }

  export type projectUpdateWithoutData_entryInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    task?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    target_entry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project_manager?: project_managerUpdateOneRequiredWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutData_entryInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    project_manager_id?: IntFieldUpdateOperationsInput | number
    task?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    target_entry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminCreateWithoutBlogInput = {
    fullname: string
    email: string
    role?: $Enums.Role
    profile_image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type adminUncheckedCreateWithoutBlogInput = {
    id?: number
    fullname: string
    email: string
    role?: $Enums.Role
    profile_image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type adminCreateOrConnectWithoutBlogInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutBlogInput, adminUncheckedCreateWithoutBlogInput>
  }

  export type categoryCreateWithoutBlogInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type categoryUncheckedCreateWithoutBlogInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type categoryCreateOrConnectWithoutBlogInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutBlogInput, categoryUncheckedCreateWithoutBlogInput>
  }

  export type tagCreateWithoutBlogInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tagUncheckedCreateWithoutBlogInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tagCreateOrConnectWithoutBlogInput = {
    where: tagWhereUniqueInput
    create: XOR<tagCreateWithoutBlogInput, tagUncheckedCreateWithoutBlogInput>
  }

  export type commentCreateWithoutBlogInput = {
    content: string
    author: string
    email: string
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type commentUncheckedCreateWithoutBlogInput = {
    id?: number
    content: string
    author: string
    email: string
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type commentCreateOrConnectWithoutBlogInput = {
    where: commentWhereUniqueInput
    create: XOR<commentCreateWithoutBlogInput, commentUncheckedCreateWithoutBlogInput>
  }

  export type commentCreateManyBlogInputEnvelope = {
    data: commentCreateManyBlogInput | commentCreateManyBlogInput[]
    skipDuplicates?: boolean
  }

  export type adminUpsertWithoutBlogInput = {
    update: XOR<adminUpdateWithoutBlogInput, adminUncheckedUpdateWithoutBlogInput>
    create: XOR<adminCreateWithoutBlogInput, adminUncheckedCreateWithoutBlogInput>
    where?: adminWhereInput
  }

  export type adminUpdateToOneWithWhereWithoutBlogInput = {
    where?: adminWhereInput
    data: XOR<adminUpdateWithoutBlogInput, adminUncheckedUpdateWithoutBlogInput>
  }

  export type adminUpdateWithoutBlogInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryUpsertWithoutBlogInput = {
    update: XOR<categoryUpdateWithoutBlogInput, categoryUncheckedUpdateWithoutBlogInput>
    create: XOR<categoryCreateWithoutBlogInput, categoryUncheckedCreateWithoutBlogInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutBlogInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutBlogInput, categoryUncheckedUpdateWithoutBlogInput>
  }

  export type categoryUpdateWithoutBlogInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryUncheckedUpdateWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tagUpsertWithoutBlogInput = {
    update: XOR<tagUpdateWithoutBlogInput, tagUncheckedUpdateWithoutBlogInput>
    create: XOR<tagCreateWithoutBlogInput, tagUncheckedCreateWithoutBlogInput>
    where?: tagWhereInput
  }

  export type tagUpdateToOneWithWhereWithoutBlogInput = {
    where?: tagWhereInput
    data: XOR<tagUpdateWithoutBlogInput, tagUncheckedUpdateWithoutBlogInput>
  }

  export type tagUpdateWithoutBlogInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tagUncheckedUpdateWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentUpsertWithWhereUniqueWithoutBlogInput = {
    where: commentWhereUniqueInput
    update: XOR<commentUpdateWithoutBlogInput, commentUncheckedUpdateWithoutBlogInput>
    create: XOR<commentCreateWithoutBlogInput, commentUncheckedCreateWithoutBlogInput>
  }

  export type commentUpdateWithWhereUniqueWithoutBlogInput = {
    where: commentWhereUniqueInput
    data: XOR<commentUpdateWithoutBlogInput, commentUncheckedUpdateWithoutBlogInput>
  }

  export type commentUpdateManyWithWhereWithoutBlogInput = {
    where: commentScalarWhereInput
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyWithoutBlogInput>
  }

  export type commentScalarWhereInput = {
    AND?: commentScalarWhereInput | commentScalarWhereInput[]
    OR?: commentScalarWhereInput[]
    NOT?: commentScalarWhereInput | commentScalarWhereInput[]
    id?: IntFilter<"comment"> | number
    content?: StringFilter<"comment"> | string
    blog_id?: IntFilter<"comment"> | number
    author?: StringFilter<"comment"> | string
    email?: StringFilter<"comment"> | string
    approved?: BoolFilter<"comment"> | boolean
    createdAt?: DateTimeFilter<"comment"> | Date | string
    updatedAt?: DateTimeFilter<"comment"> | Date | string
  }

  export type blogsCreateWithoutCategoryInput = {
    title: string
    content: string
    published?: boolean
    cover_image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    author: adminCreateNestedOneWithoutBlogInput
    tags: tagCreateNestedOneWithoutBlogInput
    comments?: commentCreateNestedManyWithoutBlogInput
  }

  export type blogsUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    content: string
    published?: boolean
    authorId: number
    cover_image?: string | null
    tag_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    comments?: commentUncheckedCreateNestedManyWithoutBlogInput
  }

  export type blogsCreateOrConnectWithoutCategoryInput = {
    where: blogsWhereUniqueInput
    create: XOR<blogsCreateWithoutCategoryInput, blogsUncheckedCreateWithoutCategoryInput>
  }

  export type blogsCreateManyCategoryInputEnvelope = {
    data: blogsCreateManyCategoryInput | blogsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type blogsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: blogsWhereUniqueInput
    update: XOR<blogsUpdateWithoutCategoryInput, blogsUncheckedUpdateWithoutCategoryInput>
    create: XOR<blogsCreateWithoutCategoryInput, blogsUncheckedCreateWithoutCategoryInput>
  }

  export type blogsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: blogsWhereUniqueInput
    data: XOR<blogsUpdateWithoutCategoryInput, blogsUncheckedUpdateWithoutCategoryInput>
  }

  export type blogsUpdateManyWithWhereWithoutCategoryInput = {
    where: blogsScalarWhereInput
    data: XOR<blogsUpdateManyMutationInput, blogsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type blogsCreateWithoutTagsInput = {
    title: string
    content: string
    published?: boolean
    cover_image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    author: adminCreateNestedOneWithoutBlogInput
    category: categoryCreateNestedOneWithoutBlogInput
    comments?: commentCreateNestedManyWithoutBlogInput
  }

  export type blogsUncheckedCreateWithoutTagsInput = {
    id?: number
    title: string
    content: string
    published?: boolean
    authorId: number
    cover_image?: string | null
    category_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    comments?: commentUncheckedCreateNestedManyWithoutBlogInput
  }

  export type blogsCreateOrConnectWithoutTagsInput = {
    where: blogsWhereUniqueInput
    create: XOR<blogsCreateWithoutTagsInput, blogsUncheckedCreateWithoutTagsInput>
  }

  export type blogsCreateManyTagsInputEnvelope = {
    data: blogsCreateManyTagsInput | blogsCreateManyTagsInput[]
    skipDuplicates?: boolean
  }

  export type blogsUpsertWithWhereUniqueWithoutTagsInput = {
    where: blogsWhereUniqueInput
    update: XOR<blogsUpdateWithoutTagsInput, blogsUncheckedUpdateWithoutTagsInput>
    create: XOR<blogsCreateWithoutTagsInput, blogsUncheckedCreateWithoutTagsInput>
  }

  export type blogsUpdateWithWhereUniqueWithoutTagsInput = {
    where: blogsWhereUniqueInput
    data: XOR<blogsUpdateWithoutTagsInput, blogsUncheckedUpdateWithoutTagsInput>
  }

  export type blogsUpdateManyWithWhereWithoutTagsInput = {
    where: blogsScalarWhereInput
    data: XOR<blogsUpdateManyMutationInput, blogsUncheckedUpdateManyWithoutTagsInput>
  }

  export type blogsCreateWithoutCommentsInput = {
    title: string
    content: string
    published?: boolean
    cover_image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    author: adminCreateNestedOneWithoutBlogInput
    category: categoryCreateNestedOneWithoutBlogInput
    tags: tagCreateNestedOneWithoutBlogInput
  }

  export type blogsUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    content: string
    published?: boolean
    authorId: number
    cover_image?: string | null
    category_id: number
    tag_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
  }

  export type blogsCreateOrConnectWithoutCommentsInput = {
    where: blogsWhereUniqueInput
    create: XOR<blogsCreateWithoutCommentsInput, blogsUncheckedCreateWithoutCommentsInput>
  }

  export type blogsUpsertWithoutCommentsInput = {
    update: XOR<blogsUpdateWithoutCommentsInput, blogsUncheckedUpdateWithoutCommentsInput>
    create: XOR<blogsCreateWithoutCommentsInput, blogsUncheckedCreateWithoutCommentsInput>
    where?: blogsWhereInput
  }

  export type blogsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: blogsWhereInput
    data: XOR<blogsUpdateWithoutCommentsInput, blogsUncheckedUpdateWithoutCommentsInput>
  }

  export type blogsUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    author?: adminUpdateOneRequiredWithoutBlogNestedInput
    category?: categoryUpdateOneRequiredWithoutBlogNestedInput
    tags?: tagUpdateOneRequiredWithoutBlogNestedInput
  }

  export type blogsUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type blogsCreateManyAuthorInput = {
    id?: number
    title: string
    content: string
    published?: boolean
    cover_image?: string | null
    category_id: number
    tag_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
  }

  export type blogsUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: categoryUpdateOneRequiredWithoutBlogNestedInput
    tags?: tagUpdateOneRequiredWithoutBlogNestedInput
    comments?: commentUpdateManyWithoutBlogNestedInput
  }

  export type blogsUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    comments?: commentUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type blogsUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type projectCreateManyProject_managerInput = {
    id?: number
    project_name: string
    task?: string | null
    start_date: Date | string
    end_date: Date | string
    description: string
    target_entry: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type projectUpdateWithoutProject_managerInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    task?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    target_entry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data_entry?: data_entryUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutProject_managerInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    task?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    target_entry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data_entry?: data_entryUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateManyWithoutProject_managerInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    task?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    target_entry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type data_entryCreateManyProjectInput = {
    id?: number
    date: Date | string
    location: string
    description: string
    image_url?: string | null
    video_url?: string | null
    document_url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type data_entryUpdateWithoutProjectInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type data_entryUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type data_entryUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentCreateManyBlogInput = {
    id?: number
    content: string
    author: string
    email: string
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type commentUpdateWithoutBlogInput = {
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentUncheckedUpdateWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentUncheckedUpdateManyWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blogsCreateManyCategoryInput = {
    id?: number
    title: string
    content: string
    published?: boolean
    authorId: number
    cover_image?: string | null
    tag_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
  }

  export type blogsUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    author?: adminUpdateOneRequiredWithoutBlogNestedInput
    tags?: tagUpdateOneRequiredWithoutBlogNestedInput
    comments?: commentUpdateManyWithoutBlogNestedInput
  }

  export type blogsUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    tag_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    comments?: commentUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type blogsUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    tag_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type blogsCreateManyTagsInput = {
    id?: number
    title: string
    content: string
    published?: boolean
    authorId: number
    cover_image?: string | null
    category_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
  }

  export type blogsUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    author?: adminUpdateOneRequiredWithoutBlogNestedInput
    category?: categoryUpdateOneRequiredWithoutBlogNestedInput
    comments?: commentUpdateManyWithoutBlogNestedInput
  }

  export type blogsUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    comments?: commentUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type blogsUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}