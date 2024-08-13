/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.TermsAndConditionsInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).termsAndConditions.createMany(input as any))),

        create: procedure.input($Schema.TermsAndConditionsInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).termsAndConditions.create(input as any))),

        deleteMany: procedure.input($Schema.TermsAndConditionsInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).termsAndConditions.deleteMany(input as any))),

        delete: procedure.input($Schema.TermsAndConditionsInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).termsAndConditions.delete(input as any))),

        findFirst: procedure.input($Schema.TermsAndConditionsInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).termsAndConditions.findFirst(input as any))),

        findMany: procedure.input($Schema.TermsAndConditionsInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).termsAndConditions.findMany(input as any))),

        findUnique: procedure.input($Schema.TermsAndConditionsInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).termsAndConditions.findUnique(input as any))),

        updateMany: procedure.input($Schema.TermsAndConditionsInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).termsAndConditions.updateMany(input as any))),

        update: procedure.input($Schema.TermsAndConditionsInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).termsAndConditions.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TermsAndConditionsCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TermsAndConditionsCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TermsAndConditionsCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TermsAndConditionsCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TermsAndConditionsCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TermsAndConditionsCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TermsAndConditionsGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TermsAndConditionsGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TermsAndConditionsCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TermsAndConditionsCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TermsAndConditionsGetPayload<T>, Context>) => Promise<Prisma.TermsAndConditionsGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TermsAndConditionsDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TermsAndConditionsDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TermsAndConditionsDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TermsAndConditionsDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TermsAndConditionsDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TermsAndConditionsDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TermsAndConditionsGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TermsAndConditionsGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TermsAndConditionsDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TermsAndConditionsDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TermsAndConditionsGetPayload<T>, Context>) => Promise<Prisma.TermsAndConditionsGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TermsAndConditionsFindFirstArgs, TData = Prisma.TermsAndConditionsGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TermsAndConditionsFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TermsAndConditionsGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TermsAndConditionsFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TermsAndConditionsFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TermsAndConditionsGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TermsAndConditionsGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TermsAndConditionsFindManyArgs, TData = Array<Prisma.TermsAndConditionsGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.TermsAndConditionsFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TermsAndConditionsGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TermsAndConditionsFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TermsAndConditionsFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TermsAndConditionsGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TermsAndConditionsGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TermsAndConditionsFindUniqueArgs, TData = Prisma.TermsAndConditionsGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TermsAndConditionsFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TermsAndConditionsGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TermsAndConditionsFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TermsAndConditionsFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TermsAndConditionsGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TermsAndConditionsGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TermsAndConditionsUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TermsAndConditionsUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TermsAndConditionsUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TermsAndConditionsUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TermsAndConditionsUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TermsAndConditionsUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TermsAndConditionsGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TermsAndConditionsGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TermsAndConditionsUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TermsAndConditionsUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TermsAndConditionsGetPayload<T>, Context>) => Promise<Prisma.TermsAndConditionsGetPayload<T>>
            };

    };
}
